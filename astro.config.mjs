import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server", // for Vercel SSR (optional, adjust based on your use)
  integrations: [tailwind(), mdx()],
  adapter: vercel()
});
