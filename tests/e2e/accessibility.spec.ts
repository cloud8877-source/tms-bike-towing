import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const PAGES_TO_TEST = [
  '/en/',
  '/ms/',
  '/zh/',
  '/th/',
  '/en/towing/',
  '/en/insurance/',
  '/en/about/',
];

test.describe('Accessibility', () => {
  PAGES_TO_TEST.forEach(url => {
    test(`${url} passes WCAG 2.1 AA`, async ({ page }) => {
      await page.goto(url);
      await page.waitForLoadState('networkidle');

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  });

  test('Interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/en/');
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });
});
