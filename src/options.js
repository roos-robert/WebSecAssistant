export const DEFAULT_OPTIONS = {
  passwordTooltipEnabled: true,
  domainBlockingEnabled: true,
  externalLinkEnabled: false,
  phishingPopupEnabled: false,
};

export async function getOptions() {
  return await browser.storage.local.get(DEFAULT_OPTIONS);
}
