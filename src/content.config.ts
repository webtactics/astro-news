import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { articleSchema } from "~/content/schema";

const articleCollection = defineCollection({
  loader: glob({ pattern: "**\/*.mdx", base: "./src/content/articles" }),
  schema: articleSchema
})

export const collections = {
  articles: articleCollection
}