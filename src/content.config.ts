import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { articleSchema, categorySchema, viewSchema } from "~/lib/schema";

const articleCollection = defineCollection({
  loader: glob({ pattern: "**\/*.mdx", base: "./src/content/articles" }),
  schema: ({image}) => articleSchema(image)
})

const viewCollection = defineCollection({
  loader: glob({ pattern: "**\/*.mdx", base: "./src/content/views" }),
  schema: viewSchema
})

const categoryCollection = defineCollection({
  loader: glob({ pattern: "**\/index.json", base: "./src/content/categories" }),
  schema: categorySchema
})

export const collections = {
  articles: articleCollection,
  views: viewCollection,
  categories: categoryCollection
}