import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static', // Use 'server' if you need SSR
  adapter: vercel(),
  integrations: [
    tailwind(),
    mdx()
  ]
});
