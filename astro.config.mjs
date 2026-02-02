// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [svelte()],

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