import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare'; // 新增导入

export default defineConfig({
  site: 'https://yourdomain.com',
  output: 'server',
  adapter: cloudflare(), // 新增适配器配置
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh', 'es', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      zh: 'en',
      es: 'en',
      ar: 'en',
    },
  },
  integrations: [sitemap()],
});