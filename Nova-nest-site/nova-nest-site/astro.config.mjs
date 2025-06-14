import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import image from "@astrojs/image";

export default defineConfig({
  output: "server",                     // Required for serverless deployment
  adapter: vercel(),                   // Astro will use Vercel adapter
  integrations: [image()],             // Enables <Image /> optimization
  site: "https://nova-nest.vercel.app" // Sets your site base URL
});
