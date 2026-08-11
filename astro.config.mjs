// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: beim Go-Live auf finale Domain umstellen
  site: 'https://kanzlei-paetsch.netlify.app',
  integrations: [sitemap()],
});
