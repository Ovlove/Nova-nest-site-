// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: true, // Ensures Tailwind styles apply to MDX/Markdown
      },
    }),
    mdx()
  ]
});
