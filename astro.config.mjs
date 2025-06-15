import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static', // or 'server' if needed
  adapter: vercel(),
  integrations: [tailwind(), mdx()]
});
