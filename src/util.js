import { format } from 'date-fns';

export function assetUrl(fileName) {
  return browser.runtime.getURL(fileName);
}

export function setHasAny(set, needles) {
  for (let needle of needles) {
    if (set.has(needle)) {
      return true;
    }
  }
  return false;
}

export function formatDate(value) {
  return format(value, 'yyyy-MM-dd HH:mm');
}