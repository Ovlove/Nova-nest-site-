import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // ✅ Vercel adapter for Astro v4
import image from '@astrojs/image'; // ✅ Optional, only if you're using Astro Image
import tailwind from '@astrojs/tailwind'; // ✅ Optional, if you're using Tailwind CSS
// import sitemap from '@astrojs/sitemap'; // ✅ Optional for SEO

export default defineConfig({
  output: 'server', // ✅ Required for Vercel adapter
  adapter: vercel(),
  integrations: [
    tailwind(),
    image(), // Only include if you're using @astrojs/image
    // sitemap(), // Optional, recommended for SEO
  ],
});
