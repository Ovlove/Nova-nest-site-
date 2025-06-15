import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // SSR for dynamic routes
  integrations: [
    mdx(),
    tailwind(),
    vercel()
  ],
  site: 'https://nova-nest-site.vercel.app'
});
