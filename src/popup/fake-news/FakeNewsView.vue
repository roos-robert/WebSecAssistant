<template>
  <section>
    <div class="section-header bg-fake-news">
      <button class="btn-sm float-right" @click="$emit('close')"><font-awesome-icon icon="angle-left" /> {{ $t('common.back') }}</button>
      <h2><font-awesome-icon icon="newspaper" /> {{ $t('popup.fakeNews.title') }}</h2>
    </div>
    <div class="section-body">
      <div v-html="$t('popup.fakeNews.summary')"></div>
      <button class="btn-primary bg-fake-news" @click="openFakeNewsGuide"><font-awesome-icon icon="book" /> {{ $t('common.clickHereToLearnMore') }}</button>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {

    };
  },
  methods: {
    openFakeNewsGuide() {
      browser.runtime.sendMessage({ type: 'openGuide', guide: 'fake-news' });
      if (this.$root.$options.popupType === 'browserAction') {
        this.$root.$emit('close');
      }
    }
  }
}
</script>

<style scoped lang="scss">
a {
  display: block;
}
</style>
