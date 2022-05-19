// THIS IS A SERVICE WORKER, DON'T USE GLOBALS

/*import { getOptions } from '../options';

import { updateCompanyAndFilterLists } from './shared';*/

// Set up message handlers
browser.runtime.onMessage.addListener(async (request, sender) => {
  /*if (request.type === 'tabWhitelist') {
    await tabWhitelist(request.domain, sender.tab.id);
    return { success: true };
  }

  if (request.type === 'whitelist') {
    await whitelist(request.domain);
    return { success: true };
  }

  if (request.type === 'updateBlocklist') {
    try {
      await updateBlocklist()
    } catch(e) {
      return { success: false, error: e.toString() };
    }
    return { success: true };
  }*/

  if (request.type === 'openGuide') {
    browser.tabs.create({
      active: true,
      url: browser.runtime.getURL('guide.html') + `#/${request.guide}/intro`,
    });
  }
});
/*
// Update blocklist on extension install
browser.runtime.onInstalled.addListener(
  () => {
    updateBlocklist()
      .then(() => console.log('Updated blocklist'))
      .catch(e => console.error('Failed to update blocklist', e));
  }
);

// Update session rules on startup
browser.runtime.onStartup.addListener(
  () => {
    updateSessionRules()
      .then(() => console.log('Updated session rules'))
      .catch(e => console.error('Failed to update session rules', e));
  }
)

const TAB_WHITELIST_FIRST_RULE_ID = 10;
async function tabWhitelist(domain, tabId) {
  const currentRules = await chrome.declarativeNetRequest.getSessionRules();

  const ruleId = TAB_WHITELIST_FIRST_RULE_ID + tabId;
  let tabRule = currentRules.find(rule => rule.id === ruleId);
  if (!tabRule) {
    tabRule = {
      id: ruleId,
      priority: 2,
      action: {
        type: 'allow',
      },
      condition: {
        resourceTypes: ['main_frame'],
        requestDomains: [],
        tabIds: [tabId],
      }
    }
  }

  tabRule.condition.requestDomains.push(domain);

  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [ruleId],
    addRules: [tabRule],
  });
}

// Remove tab whitelist when a tab is closed
browser.tabs.onRemoved.addListener(tabId => {
  const ruleId = TAB_WHITELIST_FIRST_RULE_ID + tabId;
  chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [ruleId],
  });
});

async function whitelist(domain) {
  const whitelist = (await browser.storage.local.get('whitelist')).whitelist;
  if (!whitelist) {
    await browser.storage.local.set({ whitelist: [domain] });
  } else {
    const whitelistSet = new Set(whitelist);
    whitelistSet.add(domain);
    await browser.storage.local.set({ whitelist: [...whitelistSet] });
  }
  await updateSessionRules();
}

// Update session rules when domain blocking is enabled/disabled in options
browser.storage.onChanged.addListener(async (changes, areaName) => {
  if (areaName !== 'local') return;

  if (changes['domainBlockingEnabled']) {
    await updateSessionRules();
  }
});

const MAIN_SESSION_RULE_ID = 1;
async function updateSessionRules() {
  const options = await getOptions();

  // Remove current rule
  await chrome.declarativeNetRequest.updateSessionRules({
    removeRuleIds: [MAIN_SESSION_RULE_ID],
  });

  if (!options.domainBlockingEnabled) return;

  const { companyInfo, blocklist, whitelist } = await browser.storage.local.get(['companyInfo', 'blocklist', 'whitelist']);
  if (!companyInfo) return; // No company info means blocklist is invalid or absent

  await chrome.declarativeNetRequest.updateSessionRules({
    addRules: [
      {
        id: MAIN_SESSION_RULE_ID,
        priority: 1,
        action: {
          type: 'redirect',
          redirect: {
            // TODO: Regex substitution not url encoded???
            // Possible solution: Use hash instead of query params, for example #domain|https://example.com?param1=232&param2=535j
            //  But what if the original url contains a hash?
            // Can we do any regex magic? https://github.com/google/re2/wiki/Syntax
            // Transform?
            regexSubstitution: browser.runtime.getURL('warning.html') + '?blockedBy=domain&url=\\0',
          }
        },
        condition: {
          regexFilter: '.+',
          resourceTypes: ['main_frame'],
          requestDomains: blocklist.map(b => b[0]),
          excludedRequestDomains: whitelist || [],
        }
      }
    ],
  });
}

async function updateBlocklist() {
  await updateCompanyAndFilterLists();
  await updateSessionRules();
}
*/