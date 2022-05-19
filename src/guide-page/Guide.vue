<template>
  <div>
    <div class="main-card">
      <header class="left-middle-right" :class="bgClass">
        <div>
          <button @click="closeTab"><font-awesome-icon icon="times" /><span class="desktop-label"> {{ $t('guide.close') }}</span></button>
        </div>
        <h1><font-awesome-icon :icon="icon" /> {{ title }}</h1>
        <div>
          <button @click="toggleAudio">
            <font-awesome-icon :icon="audioEnabled ? 'volume-up': 'volume-mute'" /><span class="desktop-label"> {{ $t('guide.listen') }}</span>
          </button>
        </div>
      </header>
      <main>
        <transition name="fade" mode="out-in" appear>
          <simplebar class="main" v-for="step in steps.filter(step => step === currentStep)" :key="step">
            <slot :name="step"></slot>
          </simplebar>
          <simplebar class="main" v-if="currentStep == 'done'" key="done">
            <checkmark />
            <h4>{{ $t('guide.wellDone') }}</h4>
            <p>{{ $t('guide.tabClosing') }}</p>
          </simplebar>
        </transition>
        <div class="footer left-middle-right">
          <div>
            <button class="btn-primary" :class="bgClass" v-if="hasPreviousStep" @click="goPrevious()"><font-awesome-icon icon="angle-left" /><span class="desktop-label"> {{ $t('guide.previousPage') }}</span></button>
          </div>
          <div class="step-progress" v-if="currentStep !== 'done'">
            <progress-bar
              size="large"
              :val="((currentStepIndex + 1) / steps.length) * 100"
              bg-color="#ccc"
              text-fg-color="#000"
              :text="`${currentStepIndex + 1} / ${steps.length}`"></progress-bar>
          </div>
          <div>
            <button class="btn-primary" :class="bgClass" v-if="hasNextStep" @click="goNext()"><span class="desktop-label">{{ $t('guide.nextPage') }} </span><font-awesome-icon icon="angle-right" /></button>
          </div>
        </div>
      </main>
    </div>
    <footer>
      <h4>{{ $t('common.pluginName') }}</h4>
    </footer>
  </div>
</template>

<script>

import ProgressBar from 'vue-simple-progress';
import simplebar from 'simplebar-vue';

import audioPlayer from './audioplayer';
import Checkmark from '../components/Checkmark.vue';

export default {
  name: 'guide',
  components: { Checkmark, ProgressBar, simplebar },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    steps: {
      type: Array,
      required: true,
    },
    bgClass: {
      type: String,
      required: true,
    }
  },
  provide () {
    return {
      isAudioEnabled: this.isAudioEnabled,
    }
  },
  data() {
    return {
      audioEnabled: false,
    };
  },
  computed: {
    allSteps() {
      return this.steps.concat(['done']);
    },
    currentStep() {
      return this.$route.params.step;
    },
    currentStepIndex() {
      return this.allSteps.findIndex(step => step === this.currentStep);
    },
    hasPreviousStep() {
      return this.currentStepIndex > 0;
    },
    hasNextStep() {
      return this.currentStepIndex < this.allSteps.length - 1;
    },
  },
  methods: {
    goToStep(step) {
      this.$router.push({ path: `/${this.name}/${step}` });
    },
    goPrevious() {
      if (!this.hasPreviousStep) return;
      this.goToStep(this.allSteps[this.currentStepIndex - 1]);
    },
    goNext() {
      if (!this.hasNextStep) return;
      this.goToStep(this.allSteps[this.currentStepIndex + 1]);
    },
    toggleAudio() {
      if (this.audioEnabled) {
        this.audioEnabled = false;
        audioPlayer.stop();
      } else {
        this.audioEnabled = true;
        audioPlayer.play(`guides/${this.name}/${this.currentStep}.mp3`);
      }
    },
    isAudioEnabled() {
      return this.audioEnabled;
    },
    async closeTab() {
      const currentTab = await browser.tabs.getCurrent();
      browser.tabs.remove(currentTab.id);
    }
  },
  watch: {
    $route (to) {
      if (this.audioEnabled) {
        audioPlayer.stop();
        setTimeout(() => {
          if (this.audioEnabled) {
            audioPlayer.play(`guides/${this.name}/${this.currentStep}.mp3`);
          }
        }, 1000);
      }

      if (to.params.step === 'done') {
        setTimeout(async () => {
          if (this.currentStep !== 'done') return;
          await this.closeTab();
        }, 7000);
      }
    }
  }
}

</script>

<style lang="scss">

.main {
  height: 400px;
  overflow-y: auto;
}

.footer {
  margin-top: 40px;

  .step-progress {
    width: 100px;
    padding-top: 20px;
  }
}

img {
  display: block;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
