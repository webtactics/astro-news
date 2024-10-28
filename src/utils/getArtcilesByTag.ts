import type { CollectionEntry } from "astro:content";

export const getArticlesByTag = (articles: CollectionEntry<"articles">[], tag: string) => {
  return articles.filter((article) => article.data.tags.some((t) => t.id === tag));
}