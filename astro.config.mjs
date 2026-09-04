// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // CRITICAL: without `site` set, @astrojs/sitemap silently generates an
  // empty sitemap — this is the single most common Astro SEO footgun.
  site: "https://wormstudio.co.uk",
  integrations: [tailwind(), sitemap()],
});

// All dependencies are listed in package.json — just run `npm install`.

