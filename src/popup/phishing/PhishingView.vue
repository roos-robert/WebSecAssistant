<template>
  <section>
    <div class="section-header bg-phishing">
      <button class="btn-sm float-right" @click="$emit('close')"><font-awesome-icon icon="angle-left" /> {{ $t('common.back') }}</button>
      <h2><font-awesome-icon icon="mask" /> {{ $t('popup.phishing.title') }}</h2>
    </div>
    <div class="section-body">
      <div v-html="$t('popup.phishing.summary')"></div>
      <button class="btn-primary bg-phishing" @click="openPhishingGuide"><font-awesome-icon icon="book" /> {{ $t('common.clickHereToLearnMore') }}</button>
      <div class="links space-above" v-html="$t('popup.phishing.links')"></div>
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
    openPhishingGuide() {
      browser.runtime.sendMessage({ type: 'openGuide', guide: 'phishing' });
      if (this.$root.$options.popupType === 'browserAction') {
        this.$root.$emit('close');
      }
    }
  }
}
</script>

<style scoped lang="scss">
.links {
  display: flex;
  flex-direction: column;
}
</style>
