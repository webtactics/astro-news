// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import { Site } from './src/lib/constants/config';
import { modifiedTime, readingTime } from './src/lib/utils/remarks.mjs';


// https://astro.build/config
export default defineConfig({
  site: Site.url,
  base: Site.basePath,
  markdown: {
    remarkPlugins: [readingTime, modifiedTime],
  },
  integrations: [tailwind(), mdx()],
  experimental: {
    responsiveImages: true,
  }
});