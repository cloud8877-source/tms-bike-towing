import { describe, it, expect } from 'vitest';
import { readFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = './dist';
const LOCALES = ['en', 'ms', 'zh', 'th'];

async function parseHtml(path: string) {
  return await readFile(path, 'utf-8');
}

describe('SEO Validation', () => {
  LOCALES.forEach(locale => {
    describe(`${locale} homepage`, () => {
      const pagePath = join(DIST_DIR, locale, 'index.html');

      it('has title tag', async () => {
        const html = await parseHtml(pagePath);
        expect(html).toMatch(/<title>[^<]+<\/title>/);
      });

      it('has meta description', async () => {
        const html = await parseHtml(pagePath);
        expect(html).toMatch(/<meta\s+name="description"\s+content="[^"]+"/);
      });

      it('has canonical URL', async () => {
        const html = await parseHtml(pagePath);
        expect(html).toMatch(/<link\s+rel="canonical"\s+href="[^"]+"/);
      });

      it('has hreflang tags for all locales', async () => {
        const html = await parseHtml(pagePath);
        LOCALES.forEach(lang => {
          expect(html).toContain(`hreflang="${lang}"`);
        });
        expect(html).toContain('hreflang="x-default"');
      });

      it('has Open Graph tags', async () => {
        const html = await parseHtml(pagePath);
        expect(html).toMatch(/<meta\s+property="og:title"\s+content="[^"]+"/);
        expect(html).toMatch(/<meta\s+property="og:description"\s+content="[^"]+"/);
        expect(html).toMatch(/<meta\s+property="og:type"\s+content="[^"]+"/);
        expect(html).toMatch(/<meta\s+property="og:url"\s+content="[^"]+"/);
      });

      it('has Twitter Card tags', async () => {
        const html = await parseHtml(pagePath);
        expect(html).toMatch(/<meta\s+name="twitter:card"\s+content="[^"]+"/);
      });
    });
  });
});
