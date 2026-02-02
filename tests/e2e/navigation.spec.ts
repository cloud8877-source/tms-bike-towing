import { test, expect } from '@playwright/test';

const LOCALES = ['en', 'ms', 'zh', 'th'];
const PAGES = ['', 'towing', 'insurance', 'about'];

test.describe('Navigation', () => {
  LOCALES.forEach(locale => {
    test.describe(`${locale} locale`, () => {
      test('can navigate through all main pages', async ({ page }) => {
        for (const pageName of PAGES) {
          const url = `/${locale}/${pageName}`.replace('//', '/');
          await page.goto(url);
          await expect(page.locator('html')).toHaveAttribute('lang', locale);
        }
      });

      test('language switcher is accessible', async ({ page }) => {
        await page.goto(`/${locale}/`);
        const langSwitcher = page.getByRole('button', { name: /language|bahasa|语言|ภาษา/i });
        if (await langSwitcher.isVisible()) {
          await langSwitcher.click();
          await expect(page.getByRole('menu')).toBeVisible();
        }
      });
    });
  });
});
