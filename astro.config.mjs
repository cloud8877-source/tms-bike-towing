// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://tms-bike-towing.pages.dev',
  output: 'static',
  adapter: cloudflare(),
  integrations: [svelte(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
        ms: 'ms',
        zh: 'zh',
        th: 'th',
      },
    },
  })],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ['en', 'ms', 'zh', 'th'],
    defaultLocale: 'en',
    prefixDefaultLocale: true,
    routing: {
      fallbackType: 'rewrite'
    }
  }
});
