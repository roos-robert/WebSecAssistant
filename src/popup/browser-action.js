import init from './app.js';

// Load fonts in a 'normal' module so it is injected into the Light DOM
import '../style/fonts.css';

import '../components/global';

let app = init('browserAction');

app.$on('fill-password', password => {
  // Send password to the content script running at the currently active tab
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(tabs => {
    for (let tab of tabs) {
      browser.tabs.sendMessage(tab.id, {
        type: 'FILL_PASSWORD',
        password
      });
    }
  });
});

app.$on('close', () => {
  app.$destroy();
  app = null;
  window.close();
});
