import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://b2b-website.pages.dev',
  output: 'server',
  adapter: cloudflare({
    runtime: 'off',
  }),
  // ... 你其他的 i18n 配置 ...
});