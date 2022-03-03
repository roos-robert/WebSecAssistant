import Vue from 'vue'
import App from './App.vue'
import { getVueI18nInstance } from '../locales';

import '../style/fonts.css';
import '../style/global.scss';
import '../style/fullpage.scss';
import '../components/global';

/* eslint-disable no-new */
new Vue({
  i18n: getVueI18nInstance(),
  el: '#app',
  render: h => h(App),
  shadowRoot: document.body,
})
