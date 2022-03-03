<template>
  <div class="root">
    <div class="main-card">
      <header :class="cssClass">
        <h1><font-awesome-icon :icon="icon" /> {{ title }}</h1>
      </header>
      <main>
        <p>{{ $t('warningPage.goingTo') }}<br>{{ params.url }}</p>
        <p>{{ description }}</p>
        <button v-if="categoryInfo && categoryInfo.learnUrl" class="btn-primary" :class="cssClass" @click="openWindow(categoryInfo.learnUrl)"><font-awesome-icon icon="book" /> {{ $t('common.clickHereToLearnMore') }}</button>
        
        <div class="buttons space-above">
          <button @click="goBack"><font-awesome-icon icon="angle-left" /> {{ $t('common.back') }}</button>
          <button v-if="isDangerous && !showMoreOptions" class="btn-secondary" @click="showMoreOptions = true">{{ $t('warningPage.showMore') }}</button>
          <button v-if="showMoreOptions || !isDangerous" class="btn-primary" :class="cssClass" @click="goButtonClicked">{{ $t('warningPage.continueTo') }} <i>{{ hostname }}</i></button>
        </div>

        <div v-if="showMoreOptions || !isDangerous" class="space-above">
          <label class="space-above" v-if="showMoreOptions || !isDangerous">
            <input type="checkbox" v-model="whitelistChecked">
            {{ $t('warningPage.whitelistCheckbox') }}
          </label>
        </div>
      </main>
    </div>

    <footer>
      <h4>{{ $t('common.pluginName') }}</h4>
      <!--<p>Debug: {{params}}</p>-->
    </footer>
  </div>
</template>

<script>

function getCategoryInfo(categoryId) {
  switch (categoryId) {
    case '7b748aec-2548-4983-8e91-e354810f9f9c': // Fake news
      return {
        icon: 'newspaper',
        cssClass: 'bg-fake-news',
        learnUrl: browser.runtime.getURL('guide.html') + '#/fake-news/intro',
      };
    case 'a86595db-050a-4615-89ea-549bc76b528e': // Malware
      return {
        icon: 'bug',
        cssClass: 'bg-malware',
        dangerous: true,
      };
    case '4bedc9c5-7f16-4151-ac58-05da9a575887': // Phishing
      return {
        icon: 'mask',
        cssClass: 'bg-phishing',
        dangerous: true,
        learnUrl: browser.runtime.getURL('guide.html') + '#/phishing/intro',
      };
    case 'b1648c23-f8e2-4df0-85e9-b75061157479': // Spam
      return {
        icon: 'trash-alt',
        cssClass: 'bg-spam',
      };
  }
  return null;
}

function worstCategory(categoryIds) {
  if (categoryIds.includes('a86595db-050a-4615-89ea-549bc76b528e')) return 'a86595db-050a-4615-89ea-549bc76b528e'; // Malware
  if (categoryIds.includes('4bedc9c5-7f16-4151-ac58-05da9a575887')) return '4bedc9c5-7f16-4151-ac58-05da9a575887'; // Phishing
  if (categoryIds.includes('b1648c23-f8e2-4df0-85e9-b75061157479')) return 'b1648c23-f8e2-4df0-85e9-b75061157479'; // Spam
  if (categoryIds.includes('7b748aec-2548-4983-8e91-e354810f9f9c')) return '7b748aec-2548-4983-8e91-e354810f9f9c'; // Fake news
  return null;
}

export default {
  name: 'App',
  data() {
    return {
      params: JSON.parse(Buffer(window.location.hash, 'base64').toString()),
      companyInfo: null,
      categoryInfo: null,
      showMoreOptions: false,
      whitelistChecked: false,
    }
  },
  async beforeMount() {
    this.companyInfo = (await browser.storage.local.get('companyInfo')).companyInfo;

    if (this.params.blockedBy === 'domain') {
      const categoryIds = this.companyInfo.filterLists
        .filter(fl => this.params.filterListIds.includes(fl.id))
        .map(fl => fl.categoryId);

      this.categoryInfo = getCategoryInfo(worstCategory(categoryIds));
    }
  },
  methods: {
    goBack() {
      if (history.length > 1) {
        history.back();
      } else {
        window.close();
      }
    },
    async tabWhitelistAndGo() {
      await browser.runtime.sendMessage({
        type: 'tabWhitelist',
        params: this.params,
      });
      this.goUrl();
    },
    async whitelistAndGo() {
      await browser.runtime.sendMessage({
        type: 'whitelist',
        domain: this.hostname,
      });
      this.goUrl();
    },
    async goButtonClicked() {
      if (this.whitelistChecked) {
        await this.whitelistAndGo();
      } else {
        await this.tabWhitelistAndGo();
      }
    },
    goUrl() {
      window.location.href = this.params.url;
    },
    openWindow(url) {
      window.open(url, '_blank')
    }
  },
  computed: {
    hostname() {
      const url = new URL(this.params.url);
      return url.hostname;
    },
    cssClass() {
      if (this.categoryInfo) {
        return this.categoryInfo.cssClass;
      }
      return 'bg-external-link';
    },
    icon() {
      if (this.categoryInfo) {
        return this.categoryInfo.icon;
      }
      return 'external-link-alt';
    },
    title() {
      switch (this.cssClass) {
        case 'bg-external-link': return this.$t('warningPage.externalLinkTitle');
        case 'bg-fake-news': return this.$t('warningPage.fakeNewsTitle');
        case 'bg-malware': return this.$t('warningPage.malwareTitle');
        case 'bg-phishing': return this.$t('warningPage.phishingTitle');
        case 'bg-spam': return this.$t('warningPage.spamTitle');
        default: return '';
      }
    },
    description() {
      switch (this.cssClass) {
        case 'bg-external-link': return this.$t('warningPage.externalLink');
        case 'bg-fake-news': return this.$t('warningPage.fakeNews');
        case 'bg-malware': return this.$t('warningPage.malware');
        case 'bg-phishing': return this.$t('warningPage.phishing');
        case 'bg-spam': return this.$t('warningPage.spam');
        default: return '';
      }
    },
    isDangerous() {
      if (this.categoryInfo && this.categoryInfo.dangerous) {
        return true;
      }
      return false;
    }
  }
}

</script>

<style lang="scss">

main {
  p:first-child {
    margin-top: 0;
  }
}

.buttons {
  display: flex;

  button:not(:first-child) {
    margin-left: 0.5em;
  }
}

input[type=checkbox] {
  transform: scale(1.5);
  bottom: 3px;
}

</style>
