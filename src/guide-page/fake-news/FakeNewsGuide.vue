<template>
  <Guide name="fake-news" :title="$t('guide.fakeNews.title')" icon="newspaper" :steps="steps" bgClass="bg-fake-news">
    <template slot="intro">
      <div v-html="$t('guide.fakeNews.intro')"></div>
    </template>
    <template slot="page1">
      <div v-html="$t('guide.fakeNews.page1')"></div>
    </template>
    <template slot="page2">
      <div v-html="$t('guide.fakeNews.page2')"></div>
    </template>
    <template slot="page3">
      <div v-html="$t('guide.fakeNews.page3')"></div>
    </template>
  </Guide>
</template>

<script>

import Guide from '../Guide.vue';

export default {
  name: 'FakeNewsGuide',
  components: { Guide },
  data() {
    return {
      steps: ['intro', 'page1', 'page2', 'page3'],
    }
  }
}

</script>

<style>

</style>
