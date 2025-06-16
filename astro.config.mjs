import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), mdx()],
});
