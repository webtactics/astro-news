import { getCollection, type CollectionEntry } from "astro:content";

type GetArticlesParams = {
  includeDrafts?: boolean;
  publishedBeforeNow?: boolean;
  sortByDate?: boolean;
  limit?: number;
};

export const getArticles = async (params: GetArticlesParams = {}) => {
  const {
    includeDrafts = false,
    sortByDate = false,
    publishedBeforeNow = false,
    limit,
  } = params;

  const articles: CollectionEntry<"articles">[] = (
    await getCollection("articles")
  ).filter((item) => {
    const isNotDraft = includeDrafts || !item.data.is_draft;
    const isBeforeNow =
      !publishedBeforeNow || new Date(item.data.published_time) <= new Date();
    return isNotDraft && isBeforeNow;
  });

  if (sortByDate) {
    articles.sort((a, b) =>
      b.data.published_time.localeCompare(a.data.published_time)
    );
  }

  return limit ? articles.slice(0, limit) : articles;
};
