<template>
  <div class="popup">
    <nav>
      <div @click="showOptions = !showOptions">
        <font-awesome-icon icon="cog" />
      </div>
      <div @click="goHome">
        <img :src="assetUrl('icons/icon32.png')">
      </div>
      <div @click="$root.$emit('close')">
        <font-awesome-icon icon="times" />
      </div>
    </nav>
    <main>
      <options-view v-if="showOptions" v-on:close="showOptions = false" />
      <password-view v-else-if="view === 'password'" v-on:close="goHome" />
      <phishing-view v-else-if="view === 'phishing'" v-on:close="goHome"  />
      <fake-news-view v-else-if="view === 'fake-news'" v-on:close="goHome" />
      <scamming-view v-else-if="view === 'scamming'" v-on:close="goHome" />
      <div v-else>
        <section class="link bg-password" @click="view = 'password'">
          <font-awesome-icon icon="key" />
          <span>{{ $t('popup.password.title') }}</span>
          <font-awesome-icon icon="angle-right" />
        </section>
        <section class="link bg-phishing" @click="view = 'phishing'">
          <font-awesome-icon icon="mask" />
          <span>{{ $t('popup.phishing.title') }}</span>
          <font-awesome-icon icon="angle-right" />
        </section>
        <section class="link bg-fake-news" @click="view = 'fake-news'">
          <font-awesome-icon icon="newspaper" />
          <span>{{ $t('popup.fakeNews.title') }}</span>
          <font-awesome-icon icon="angle-right" />
        </section>
        <section class="link bg-scamming" @click="view = 'scamming'">
          <font-awesome-icon icon="comments-dollar" />
          <span>{{ $t('popup.scamming.title') }}</span>
          <font-awesome-icon icon="angle-right" />
        </section>
      </div>
    </main>
  </div>
</template>

<script>


import PhishingView from './phishing/PhishingView.vue';
import PasswordView from './password/PasswordView.vue';
import FakeNewsView from './fake-news/FakeNewsView.vue';
import ScammingView from './scamming/ScammingView.vue';
import OptionsView from './options/OptionsView.vue';

import { assetUrl } from '../util.js';

export default {
  name: 'App',
  components: { PhishingView, PasswordView, OptionsView, FakeNewsView, ScammingView },
  data() {
    return {
      showOptions: false,
      view: this.$root.$options.initialView,
    };
  },
  methods: {
    assetUrl,
    goHome() {
      this.showOptions = false;
      this.view = 'home';
    },
  }
}
</script>

<style lang="scss">
@import "../style/global.scss";

.popup {
  width: 400px;
  overflow: hidden;
}

nav {
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--popup-navbar-height);
  background: var(--color-primary);
  color: white;

  div {
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
    }
  }
}

main {
  background: rgb(238, 240, 242);
  margin: 0;
  padding: 0px 10px;
  overflow: auto;
  max-height: var(--popup-main-max-height);

  .container {
    padding: 15px;
  }

  section {
    background: white;
    color: black;
    margin: 10px 0px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    overflow: hidden;

    &.no-shadow {
      box-shadow: none;
    }

    .section-header {
      color: white;
      padding: 15px;
      
      h2 {
        margin: 0;
      }
    }

    .section-body {
      padding: 15px;
    }

    &.link {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px;
      transition: 3s;
      color: white;
      
      &:hover {
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
      }
      
      span {
        flex: 1;
      }
      
      svg {
        &:first-child {
          width: 40px;
        }
        
        font-size: 25px;
      }
    }

    .close-button {
      float: right;
    }
  }
}

</style>
