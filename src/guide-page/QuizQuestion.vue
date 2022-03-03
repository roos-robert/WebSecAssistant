<template>
  <div>
    <h2>{{ question.text }}</h2>
    <div class="answers">
      <a 
        v-for="(answer, index) in question.answers" :key="index"
        @click="checkAnswer(index)"
        :class="{
          good: currentAnswerIndex === index && question.answer === index,
          bad: currentAnswerIndex === index && question.answer !== index
        }">{{ answer }}</a>
    </div>
    <p class="feedback" v-if="feedback">
      {{ feedback }}
    </p>
  </div>
</template>

<script>

import audioPlayer from './audioplayer';

export default {
  props: {
    question: {
      type: Object,
      required: true,
    },
    audioPrefix: {
      type: String,
      default: '',
    }
  },
  name: 'QuizQuestion',
  inject: ['isAudioEnabled'],
  data() { return {
    feedback: null,
    currentAnswerIndex: null,
  }},
  methods: {
    checkAnswer(answer) {
      this.feedback = this.question.feedback[answer];
      this.currentAnswerIndex = answer;

      if (this.question.answer === answer) {
        this.$emit('pass');
      } else {
        this.$emit('fail');
      }

      if (this.isAudioEnabled() && this.$props.audioPrefix.length > 0) {
        audioPlayer.play('guides/' + this.$props.audioPrefix + 'a' + (answer + 1) + '.mp3');
      }
    },
  },
}
</script>

<style scoped lang="scss">

.answers {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  text-align: left;
  margin-bottom: 20px;

  a {
    position: relative;
    display: block;
    padding: 10px 12px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 3px solid rgba(0, 0, 0, 0.3);

    text-decoration: none;
    width: 100%;
    text-align: inherit;
    cursor: pointer;
    
    &:focus, &:hover {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &.bad {
      color: white;
      background: var(--color-bad);
    }

    &.good {
      color: white;
      background: var(--color-good);
    }
  }
}

</style>
