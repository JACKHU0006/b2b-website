// astro.config.mjs
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import DecapCMS from '@jee-r/astro-decap-cms'; // 引入集成

export default defineConfig({
  site: 'https://b2b-website-manual.jack006hu.workers.dev',
  output: 'server',
  adapter: cloudflare(),
  i18n: {
    // 保持你现有的多语言配置不变
    defaultLocale: 'en',
    locales: ['en', 'zh', 'es', 'ar'],
    routing: { prefixDefaultLocale: true },
    fallback: { zh: 'en', es: 'en', ar: 'en' },
  },
  integrations: [
    sitemap(),
    DecapCMS({
      adminPath: '/admin', // 后台访问路径
      config: {
        backend: {
          name: 'git-gateway', // 使用 Git Gateway 后端
          branch: 'main',      // 你的主分支
        },
        // 定义媒体文件存放位置
        media_folder: 'public/images/uploads',
        public_folder: '/images/uploads',
        // 内容集合配置
        collections: [
          {
            name: 'blog',                // 集合名称
            label: 'Blog Posts',         // 后台显示标签
            folder: 'src/content/blog',  // 文件存放路径
            create: true,                // 允许创建新文章
            fields: [                    // 定义文章字段
              { name: 'title', label: 'Title', widget: 'string' },
              { name: 'pubDate', label: 'Publish Date', widget: 'datetime' },
              { name: 'description', label: 'Description', widget: 'text', required: false },
              { name: 'body', label: 'Body', widget: 'markdown' },
            ],
          },
        ],
      },
    }),
  ],
});