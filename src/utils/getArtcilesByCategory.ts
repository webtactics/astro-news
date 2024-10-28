import type { CollectionEntry } from "astro:content";

export const getArticlesByCategory = (articles: CollectionEntry<"articles">[], category: string) => {
  return articles.filter((article) => article.data.category.id === category);
}