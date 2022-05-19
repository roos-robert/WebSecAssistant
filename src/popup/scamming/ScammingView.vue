<template>
  <section>
    <div class="section-header bg-scamming">
      <button class="btn-sm float-right" @click="$emit('close')"><font-awesome-icon icon="angle-left" /> {{ $t('common.back') }}</button>
      <h2><font-awesome-icon icon="comments-dollar" /> {{ $t('popup.scamming.title') }}</h2>
    </div>
    <div class="section-body">
      <div v-html="$t('popup.scamming.summary')"></div>
      <button class="btn-primary bg-scamming" @click="openScammingGuide"><font-awesome-icon icon="book" /> {{ $t('common.clickHereToLearnMore') }}</button>
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
    openScammingGuide() {
      browser.runtime.sendMessage({ type: 'openGuide', guide: 'scamming' });
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
