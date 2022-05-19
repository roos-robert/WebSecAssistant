import { DEFAULT_OPTIONS } from '../options';

import { setHasAny } from '../util';

import { updateCompanyAndFilterLists } from './shared';

const options = { ...DEFAULT_OPTIONS };

let companyInfo = null;

// Domain blocklist where each key is a domain, and the value is an array of filterList IDs containing that domain
let domainBlocklist = new Map([]);
let domainWhitelist = new Set([]);

// Temporary whitelists by tab id
const tabWhitelists = new Map();

const externallyOpenedTabs = new Set();

let currentlyFocusedWindowId = 0;

// Set up message handlers
browser.runtime.onMessage.addListener(async (request, sender) => {
  if (request.type === 'tabWhitelist') {
    let whitelist = tabWhitelists.get(sender.tab.id);
    if (whitelist === undefined) {
      whitelist = new Set();
      tabWhitelists.set(sender.tab.id, whitelist);
    }

    whitelist.add(request.domain);

    return { success: true };
  }

  if (request.type === 'whitelist') {
    domainWhitelist.add(request.domain);
    saveWhitelist();
    return { success: true };
  }

  if (request.type === 'updateBlocklist') {
    try {
      await updateBlocklist()
    } catch(e) {
      return { success: false, error: e.toString() };
    }
    return { success: true };
  }

  if (request.type === 'openGuide') {
    browser.tabs.create({
      active: true,
      url: browser.runtime.getURL('guide.html') + `#/${request.guide}/intro`,
    });
  }
});

// Set up event listeners

// React to option changes
browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== 'local') return;

  for (const optionKey of Object.keys(DEFAULT_OPTIONS)) {
    if (changes[optionKey]) {
      options[optionKey] = changes[optionKey].newValue;
    }
  }
});

// Update blocklist on extension install
browser.runtime.onInstalled.addListener(
  () => {
    updateBlocklist()
      .then(() => console.log('Updated blocklist'))
      .catch(e => console.error('Failed to update blocklist', e));
  }
);

// Set up request middleware
browser.webRequest.onBeforeRequest.addListener(
  onBeforeRequest,
  { urls: ['<all_urls>'], types: ['main_frame'] },
  ['blocking']
);

// Remove tab whitelist when a tab is closed
browser.tabs.onRemoved.addListener(tabId => {
  tabWhitelists.delete(tabId);
});

// Update currently focused windowId
browser.windows.onFocusChanged.addListener(windowId => {
  currentlyFocusedWindowId = windowId;
});

// Check if a new tab was externally opened
browser.tabs.onCreated.addListener(tab => {
  if (options.externalLinkEnabled && tab.id && tab.id >= 0 && currentlyFocusedWindowId === browser.windows.WINDOW_ID_NONE) {
    externallyOpenedTabs.add(tab.id);
  }
});

function onBeforeRequest(requestDetails) {
  const url = new URL(requestDetails.url);

  if (options.externalLinkEnabled && externallyOpenedTabs.has(requestDetails.tabId)) {
    externallyOpenedTabs.delete(requestDetails.tabId);

    if (!domainWhitelist.has(url.hostname)) {
      return redirectToWarning({
        url: requestDetails.url,
        blockedBy: 'externalLink',
      });
    }
  }

  if (!options.domainBlockingEnabled) return;

  if (companyInfo === null)
    return; // The blocklist has not been loaded properly

  const domains = url.hostname.split('.')
    .map((_, i, arr) => arr.slice(i, arr.length).join('.'));

  const tabWhitelist = tabWhitelists.get(requestDetails.tabId);
  if (tabWhitelist && setHasAny(tabWhitelist, domains)) {
    return;
  }

  if (setHasAny(domainWhitelist, domains)) {
    return;
  }

  for (const domain of domains) {
    const filterListIds = domainBlocklist.get(domain);
    if (filterListIds !== undefined) {
      return redirectToWarning({
        url: requestDetails.url,
        blockedBy: 'domain',
      })
    }
  }
}

function redirectToWarning(params) {
  return {
    redirectUrl: browser.runtime.getURL('warning.html')
      + `?blockedBy=${params.blockedBy}&url=${encodeURIComponent(params.url)}`,
  }
}

async function loadBlocklist() {
  const result = await browser.storage.local.get(['companyInfo', 'blocklist']);
  companyInfo = result.companyInfo;
  domainBlocklist = new Map(result.blocklist);
}

async function updateBlocklist() {
  await updateCompanyAndFilterLists();
  await loadBlocklist();
}

async function loadWhitelist() {
  const result = await browser.storage.local.get('whitelist');
  if (result.whitelist) {
    domainWhitelist = new Set(result.whitelist);
  }
}

async function saveWhitelist() {
  await browser.storage.local.set({
    whitelist: [...domainWhitelist],
  });
}

console.log('Loading options...');
browser.storage.local.get(Object.keys(DEFAULT_OPTIONS))
  .then(optionsInStorage => Object.assign(options, optionsInStorage))
  .catch(e => console.error('Error loading options: ', e));

console.log('Loading blocklist from storage...');
loadBlocklist()
  .then(() => console.log('Blocklist loaded'))
  .catch(e => console.error('Error loading blocklist: ', e));

console.log('Loading whitelist from storage...');
loadWhitelist()
  .then(() => console.log('Whitelist loaded'))
  .catch(e => console.error('Error loading whitelist: ', e));
