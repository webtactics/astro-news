import { loadEnv } from "vite";
// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import keystatic from "@keystatic/astro";
import {remarkReadingTime} from "./src/utils/remark-reading-time.mjs";
import {remarkModifiedTime} from "./src/utils/remark-modified-time.mjs";
import { SITE } from "./src/lib/consts";

const { RUN_KEYSTATIC } = loadEnv(import.meta.env.MODE, process.cwd(), "");

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,
  output: "hybrid",
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkModifiedTime],
  },
  integrations: [
    tailwind(),
    react(),
    mdx(),
    ...(RUN_KEYSTATIC === "true" ? [keystatic()] : []),
  ],
});
