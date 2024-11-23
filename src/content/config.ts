import { defineCollection, reference, z } from "astro:content";
import {
  articleSchema,
  authorSchema,
  categorySchema,
  pageSchema,
  tagSchema,
} from "./schema";

const articleCollection = defineCollection({
  type: "content",
  schema: ({ image }) => articleSchema(image),
});
const pageCollection = defineCollection({
  type: "content",
  schema: pageSchema(),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) => authorSchema(image),
});

const categoryCollection = defineCollection({
  type: "data",
  schema: ({ image }) => categorySchema(image),
});

const tagCollection = defineCollection({
  type: "data",
  schema: ({ image }) => tagSchema(image),
});

export const collections = {
  articles: articleCollection,
  pages: pageCollection,
  authors: authorCollection,
  categories: categoryCollection,
  tags: tagCollection,
};
