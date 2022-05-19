<template>
  <section>
    <div class="section-header bg-password">
      <button class="btn-sm float-right" @click="$emit('close')"><font-awesome-icon icon="angle-left" /> {{ $t('common.back') }}</button>
      <h2><font-awesome-icon icon="key" /> {{ $t('popup.password.title') }}</h2>
    </div>
    <div class="section-body">
      <div v-html="$t('popup.password.summary')"></div>
      <button class="btn-primary bg-password" @click="openPasswordGuide"><font-awesome-icon icon="book" /> {{ $t('common.clickHereToLearnMore') }}</button>
    </div>
  </section>
</template>

<script>

export default {
  name: 'PasswordSummary',
  methods: {
    openPasswordGuide() {
      browser.runtime.sendMessage({ type: 'openGuide', guide: 'password' });
      if (this.$root.$options.popupType === 'browserAction') {
        this.$root.$emit('close');
      }
    }
  },
}
</script>

<style scoped lang="scss">

</style>
