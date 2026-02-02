import { describe, it, expect } from 'vitest';
import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const DIST_DIR = './dist';
const LOCALES = ['en', 'ms', 'zh', 'th'];
const EXPECTED_PAGES = ['index.html', 'about/index.html', 'towing/index.html', 'insurance/index.html'];
const EXPECTED_LOCATION_PAGES = 14;

describe('Build Validation', () => {
  it('dist directory exists', async () => {
    const stats = await readdir(DIST_DIR);
    expect(stats).toBeDefined();
  });

  LOCALES.forEach(locale => {
    describe(`${locale} locale`, () => {
      EXPECTED_PAGES.forEach(page => {
        it(`has ${page}`, async () => {
          const path = join(DIST_DIR, locale, page);
          const content = await readFile(path, 'utf-8');
          expect(content).toContain('<!doctype html>');
          expect(content).toContain(`lang="${locale}"`);
        });
      });

      it('has all location pages', async () => {
        const towingDir = join(DIST_DIR, locale, 'towing');
        const entries = await readdir(towingDir, { withFileTypes: true });
        const dirs = entries.filter(e => e.isDirectory()).length;
        expect(dirs).toBe(EXPECTED_LOCATION_PAGES);
      });
    });
  });

  it('generates exactly 73 HTML files', async () => {
    const countHtml = async (dir: string): Promise<number> => {
      const entries = await readdir(dir, { withFileTypes: true });
      let count = 0;
      for (const entry of entries) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) {
          count += await countHtml(path);
        } else if (entry.name.endsWith('.html')) {
          count++;
        }
      }
      return count;
    };
    const total = await countHtml(DIST_DIR);
    expect(total).toBe(73);
  });
});
