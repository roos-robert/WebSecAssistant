<template>
  <section>
    <div class="section-body">
      <label>{{ $t('popup.password.tester.title') }}</label>
      <input type="password" v-model="password" v-on:keyup.enter="fillPassword" />
      <div class="pad"></div>
      <label>{{ $t('popup.password.tester.strength') }}</label>
      <progress-bar
        size="large"
        :val="pwScoreProgressData.value"
        :bar-color="pwScoreProgressData.color"
        :bar-border-radius=4
        bg-color="#ddd"
        text-fg-color="#000"
        :text="pwScoreProgressData.text"></progress-bar>
      <div class="pad"></div>
      <button v-if="password" @click="fillPassword"><font-awesome-icon icon="check" /> {{ $t('popup.password.tester.usePassword') }}</button>
    </div>
  </section>
</template>

<script>
import ProgressBar from 'vue-simple-progress';
import zxcvbn from 'zxcvbn';

export default {
  name: 'PasswordInput',
  components: { ProgressBar },
  data: function() { return {
    password: "",
  }},
  methods: {
    fillPassword() {
      this.$root.$emit('fill-password', this.password);
      this.$root.$emit('close');
    },
  },
  computed: {
    score: function() {
      return zxcvbn(this.password, []).score;
    },
    pwScoreProgressData: function() {
      switch (this.score) {
        case 0: return { value: 5, text: this.$t('popup.password.tester.strengths.veryWeak'), color: "#f96868" };
        case 1: return { value: 15, text: this.$t('popup.password.tester.strengths.weak'), color: "#f96868" };
        case 2: return { value: 35, text: this.$t('popup.password.tester.strengths.medium'), color: "#178de5" };
        case 3: return { value: 65, text: this.$t('popup.password.tester.strengths.strong'), color: "#178de5" };
        case 4:
        default: return { value: 100, text: this.$t('popup.password.tester.strengths.veryStrong'), color: "#1abc9c" };
      }
    }
  }
}
</script>

<style>

.vue-simple-progress {
  overflow: hidden;
  border-radius: 4px;
}

.pad {
  height: 10px;
}

</style>

<style scoped lang="scss">

</style>
