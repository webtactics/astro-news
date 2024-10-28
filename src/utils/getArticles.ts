import { getCollection } from "astro:content";

export const getArticles = async () => {

  const articles = await getCollection("articles", ({ data }) => {
    return !data.is_draft && new Date(data.published_time) <= new Date();
  })

  return articles.sort((a, b) =>
    b.data.published_time.localeCompare(a.data.published_time)
  );
}