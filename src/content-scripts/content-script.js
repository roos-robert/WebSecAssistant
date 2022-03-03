/* eslint-disable no-unused-vars */
import Vue from 'vue';
import App from './App.vue';

// Load fonts in a 'normal' module so it is injected into the Light DOM
import '../style/fonts.css';

import '../components/global';

let shadowHost = null;
let shadow = null;

let appInstance = null;

function inject() {
  if (document.querySelector('#ubarso-host')) {
    return;
  }

  shadowHost = document.createElement('div');
  shadowHost.id = 'ubarso-host';
  shadow = shadowHost.attachShadow({ mode: 'open' });
  document.body.appendChild(shadowHost);

  const app = document.createElement('div');
  shadow.appendChild(app);

  appInstance = new Vue({
    el: app,
    render: h => h(App),
    shadowRoot: shadow,
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inject);
} else {
  inject();
}

browser.runtime.onMessage.addListener(message => {
  if (message.type === 'FILL_PASSWORD') {
    document.querySelectorAll('input[type="password"]').forEach(input => {
      input.value = message.password;
    });
  }
})
