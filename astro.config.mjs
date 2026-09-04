// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Required for the sitemap to generate anything at all - update if the
  // real domain differs.
  site: "https://wormstudio.co.uk",
  integrations: [tailwind(), sitemap()],
});
