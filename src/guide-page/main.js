import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { getVueI18nInstance } from '../locales';

import 'simplebar/dist/simplebar.min.css';
import '../style/fonts.css';
import '../style/global.scss';
import '../style/fullpage.scss';
import '../components/global';

import PasswordGuide from './password/PasswordGuide.vue';
import PhishingGuide from './phishing/PhishingGuide.vue';
import FakeNewsGuide from './fake-news/FakeNewsGuide.vue';
import ScammingGuide from './scamming/ScammingGuide.vue';

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/password/:step', component: PasswordGuide },
    { path: '/phishing/:step', component: PhishingGuide },
    { path: '/fake-news/:step', component: FakeNewsGuide },
    { path: '/scamming/:step', component: ScammingGuide },
  ]
})

/* eslint-disable no-new */
new Vue({
  i18n: getVueI18nInstance(),
  el: '#app',
  render: h => h(App),
  router,
  shadowRoot: document.body,
});
