// @ts-check
import { defineConfig } from "astro/config";
import { SITE } from "./src/lib/consts";
import sitemap from "@astrojs/sitemap";
import { modifiedTime, readingTime } from "./src/utils/remarks.mjs";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: SITE.origin,
  base: SITE.basePath,
  output: "hybrid",
  trailingSlash: "never",
  markdown: {
    remarkPlugins: [readingTime, modifiedTime]
  },
  integrations: [sitemap(), mdx(), tailwind()],
});