import Vue from 'vue';
import App from './App.vue';
import { getVueI18nInstance } from '../locales';

export default function init(popupType, element, shadowRoot, initialView = 'home') {
  return new Vue({
    i18n: getVueI18nInstance(),
    el: element || document.getElementById('app'),
    render: h => h(App),
    popupType,
    shadowRoot: shadowRoot || document.body,
    initialView,
  });
}
