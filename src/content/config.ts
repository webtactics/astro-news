import { defineCollection } from "astro:content";
import { articleSchema, authorSchema, categorySchema, tagSchema } from "./_schema";

const articleCollection = defineCollection({
  type: "content",
  schema: ({ image }) => articleSchema(image),
});

const authorsCollection = defineCollection({
  type: "data",
  schema: ({ image }) => authorSchema(image)
});

const tagCollection = defineCollection({
  type: "data",
  schema: tagSchema
});

const categoriesCollection = defineCollection({
  type: "data",
  schema: categorySchema
});


export const collections = {
  articles: articleCollection,
  authors: authorsCollection,
  categories: categoriesCollection,
  tags: tagCollection,
};