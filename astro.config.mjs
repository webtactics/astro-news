import { loadEnv } from "vite";
// @ts-check
import { defineConfig } from 'astro/config';
import keystatic from '@keystatic/astro'
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import pagefind from 'astro-pagefind';
import sitemap from '@astrojs/sitemap';

const {RUN_KEYSTATIC} = loadEnv(
  import.meta.env.MODE,
  process.cwd(),
  ""
)

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react(), pagefind(), sitemap(), ...RUN_KEYSTATIC === "true" ? [keystatic()] : []],
  markdown: {},
  output: "hybrid"
});