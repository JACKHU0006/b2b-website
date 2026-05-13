import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://b2b-website.pages.dev',
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'es', 'ar'],
    routing: { prefixDefaultLocale: false },
    fallback: { zh: 'en', es: 'en', ar: 'en' },
  },
  integrations: [sitemap()],
});