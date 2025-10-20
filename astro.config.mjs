// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://pixilaremedia.com/",
  trailingSlash: "always",
  output: "static",
  compressHTML: true,

  build: {
      format: "directory",
      assets: "astro"
  },

  server: {
      port: 8081,
      host: true
  },

  integrations: [sitemap()]
});