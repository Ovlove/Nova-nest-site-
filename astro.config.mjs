import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs',
    }),
    mdx(),
    vercel(),
  ],
  output: 'server', // needed for MDX dynamic routes
});
