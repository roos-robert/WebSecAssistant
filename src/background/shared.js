export const API_BASE_URL = 'https://ubarso.xenolith.se/api';
export const COMPANY_ID = '17144a08-c1cf-42c4-827a-2f5d08614af6';

/** Fetch the company information and filterlists and save to browser storage */
export async function updateCompanyAndFilterLists() {
  const companyInfo = await fetch(`${API_BASE_URL}/company/${COMPANY_ID}`, { cache: 'reload' })
    .then(r => r.json());

  const blocklist = new Map();  
  for (const filterList of companyInfo.filterLists) {
    const listData = await fetch(`${API_BASE_URL}/filterlist/${filterList.id}`, { cache: 'reload' })
      .then(r => r.text());
    
    for (const domain of listData.split('\n')) {
      let filterListSet = blocklist.get(domain);
      if (filterListSet === undefined) {
        blocklist.set(domain, new Set([filterList.id]));
      } else {
        filterListSet.add(filterList.id);
      }
    }
  }

  await browser.storage.local.set({
    companyInfo,
    blocklistUpdated: Date.now(),
    blocklist: [...blocklist].map(([k, v]) => [k, [...v]])
  });
}
