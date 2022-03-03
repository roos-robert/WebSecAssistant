import Vue from 'vue';
import VueI18n from 'vue-i18n';

import sv from './sv';
import en from './en';

const messages = { en, sv }

export function getVueI18nInstance() {
  Vue.use(VueI18n);

  const uiLocale = browser.i18n.getUILanguage().substr(0, 2);
  return new VueI18n({
    locale: messages[uiLocale] ? uiLocale : 'en',
    messages,
  });
}

export default getVueI18nInstance;
