import { describe, it, expect } from 'vitest';
import en from '../../src/i18n/en.json';
import ms from '../../src/i18n/ms.json';
import zh from '../../src/i18n/zh.json';
import th from '../../src/i18n/th.json';

const locales = { en, ms, zh, th } as const;
const baseLocale = 'en';

function getAllKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return typeof value === 'object' && value !== null && !Array.isArray(value)
      ? getAllKeys(value as Record<string, unknown>, path)
      : [path];
  });
}

describe('i18n Completeness', () => {
  const baseKeys = getAllKeys(locales[baseLocale]);

  Object.entries(locales).forEach(([locale, translations]) => {
    if (locale === baseLocale) return;

    it(`${locale} has all keys from ${baseLocale}`, () => {
      const localeKeys = getAllKeys(translations);
      const missingKeys = baseKeys.filter(key => !localeKeys.includes(key));
      expect(missingKeys, `Missing keys in ${locale}`).toEqual([]);
    });

    it(`${locale} has no extra keys not in ${baseLocale}`, () => {
      const localeKeys = getAllKeys(translations);
      const extraKeys = localeKeys.filter(key => !baseKeys.includes(key));
      expect(extraKeys, `Extra keys in ${locale}`).toEqual([]);
    });

    it(`${locale} has no empty string values`, () => {
      const checkEmpty = (obj: Record<string, unknown>, path = ''): string[] => {
        return Object.entries(obj).flatMap(([key, value]) => {
          const currentPath = path ? `${path}.${key}` : key;
          if (typeof value === 'object' && value !== null) {
            return checkEmpty(value as Record<string, unknown>, currentPath);
          }
          return value === '' ? [currentPath] : [];
        });
      };
      const emptyKeys = checkEmpty(translations);
      expect(emptyKeys, `Empty values in ${locale}`).toEqual([]);
    });
  });

  it('All locales have the expected count of keys', () => {
    const expectedCount = baseKeys.length;
    Object.entries(locales).forEach(([locale, translations]) => {
      const count = getAllKeys(translations).length;
      expect(count, `${locale} key count`).toBe(expectedCount);
    });
  });
});
