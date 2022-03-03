<template>
  <Guide name="scamming" :title="$t('guide.scamming.title')" icon="comments-dollar" :steps="steps" bgClass="bg-scamming">
    <template slot="intro">
      <div v-html="$t('guide.scamming.intro')"></div>
    </template>
    <template slot="page1">
      <div v-html="$t('guide.scamming.page1')"></div>
    </template>
    <template slot="page2">
      <div v-html="$t('guide.scamming.page2')"></div>
    </template>
    <template slot="page3">
      <div v-html="$t('guide.scamming.page3')"></div>
    </template>
    <template slot="page4">
      <div v-html="$t('guide.scamming.page4')"></div>
    </template>
  </Guide>
</template>

<script>

import Guide from '../Guide.vue';

export default {
  name: 'ScammingGuide',
  components: { Guide },
  data() {
    return {
      steps: ['intro', 'page1', 'page2', 'page3', 'page4'],
    }
  }
}

</script>

<style>

</style>
