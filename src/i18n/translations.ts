import en from './en.json';
import ms from './ms.json';
import zh from './zh.json';
import th from './th.json';
import type { Locale } from './utils';

const translations: Record<Locale, typeof en> = {
  en,
  ms,
  zh,
  th
};

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }

  return typeof value === 'string' ? value : key;
}

export function tArray(locale: Locale, key: string): string[] {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // Fallback to English
      value = translations.en;
      for (const fallbackKey of keys) {
        if (value && typeof value === 'object' && fallbackKey in value) {
          value = value[fallbackKey];
        } else {
          return [key]; // Return key in array if not found
        }
      }
      break;
    }
  }

  return Array.isArray(value) ? value : [key];
}

export { translations };
