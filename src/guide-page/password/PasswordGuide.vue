<template>
  <Guide name="password" :title="$t('guide.password.title')" icon="key" :steps="['intro', 'guide', 'quiz1', 'quiz2', 'quiz3']" bgClass="bg-password">
    <template slot="intro">
      <div v-html="$t('guide.password.intro')"></div>
    </template>
    <template slot="guide">
      <div v-html="$t('guide.password.guide')"></div>
    </template>
    <template slot="quiz1">
      <quiz-question :question="question1" audioPrefix="password/quiz1" />
    </template>
    <template slot="quiz2">
      <quiz-question :question="question2" audioPrefix="password/quiz2" />
    </template>
    <template slot="quiz3">
      <quiz-question :question="question3" audioPrefix="password/quiz3" />
    </template>
  </Guide>
</template>

<script>

import Guide from '../Guide.vue';
import QuizQuestion from '../QuizQuestion.vue';

export default {
  components: { QuizQuestion, Guide },
  name: 'PasswordGuide',
  computed: {
    question1() {
      return {
        text: this.$t('guide.password.quiz1.question'),
        answers: [
          this.$t('guide.password.quiz1.answer1'),
          this.$t('guide.password.quiz1.answer2'),
          this.$t('guide.password.quiz1.answer3'),
        ],
        answer: 1,
        feedback: [
          this.$t('guide.password.quiz1.feedback1'),
          this.$t('guide.password.quiz1.feedback2'),
          this.$t('guide.password.quiz1.feedback3'),
        ]
      }
    },
    question2() {
      return {
        text: this.$t('guide.password.quiz2.question'),
        answers: [
          this.$t('guide.password.quiz2.answer1'),
          this.$t('guide.password.quiz2.answer2'),
          this.$t('guide.password.quiz2.answer3'),
        ],
        answer: 0,
        feedback: [
          this.$t('guide.password.quiz2.feedback1'),
          this.$t('guide.password.quiz2.feedback2'),
          this.$t('guide.password.quiz2.feedback3'),
        ]
      }
    },
    question3() {
      return {
        text: this.$t('guide.password.quiz3.question'),
        answers: [
          this.$t('guide.password.quiz3.answer1'),
          this.$t('guide.password.quiz3.answer2'),
          this.$t('guide.password.quiz3.answer3'),
        ],
        answer: 2,
        feedback: [
          this.$t('guide.password.quiz3.feedback1'),
          this.$t('guide.password.quiz3.feedback2'),
          this.$t('guide.password.quiz3.feedback3'),
        ]
      }
    }
  }
}

</script>

<style>

</style>
