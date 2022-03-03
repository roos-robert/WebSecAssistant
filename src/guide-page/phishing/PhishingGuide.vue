<template>
  <Guide name="phishing" :title="$t('guide.phishing.title')" icon="mask" :steps="steps" bgClass="bg-phishing">
    <template slot="intro">
      <div v-html="$t('guide.phishing.intro')"></div>
    </template>
    <template slot="read">
      <div v-html="$t('guide.phishing.read')"></div>
    </template>
    <template slot="links">
      <div v-html="$t('guide.phishing.links')"></div>
      <img :src="assetUrl('img/swebdank.png')">
    </template>
    <template slot="links2">
      <div v-html="$t('guide.phishing.links2')"></div>
      <img :src="assetUrl('img/fakemail.png')">
    </template>
    <template slot="suspicion">
      <div v-html="$t('guide.phishing.suspicion')"></div>
    </template>
    <template slot="summary">
      <div v-html="$t('guide.phishing.summary')"></div>
    </template>
  </Guide>
</template>

<script>

import { assetUrl } from '../../util.js';

import Guide from '../Guide.vue';

export default {
  name: 'PhishingGuide',
  components: { Guide },
  methods: {
    assetUrl,
  },
  data() {
    return {
      steps: ['intro', 'read', 'links', 'links2', 'suspicion', 'summary'],
    }
  }
}

</script>

<style>

</style>
