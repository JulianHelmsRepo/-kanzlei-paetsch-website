// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: an echte Produktions-Domain anpassen
  site: 'https://www.rae-vp.de',
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      // Deutsch liegt auf der Root (ohne /de/-Prefix), Englisch unter /en/
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
});
