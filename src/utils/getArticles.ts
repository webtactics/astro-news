import { getCollection, type CollectionEntry } from "astro:content";

type GetArticlesParams = {
  includeDrafts?: boolean;
  publishedBeforeNow?: boolean;
  sortByDate?: boolean;
  limit?: number;
  is_in_headline?: boolean;
  is_in_news_ticker?: boolean;
};

export const getArticles = async (params: GetArticlesParams = {}) => {
  const {
    includeDrafts = false,
    sortByDate = true,
    publishedBeforeNow = false,
    limit,
    is_in_headline,
    is_in_news_ticker,
  } = params;

  const articles: CollectionEntry<"articles">[] = (
    await getCollection("articles")
  ).filter((item) => {
    const isNotDraft = includeDrafts || !item.data.is_draft;
    const isBeforeNow =
      !publishedBeforeNow || new Date(item.data.published_time) <= new Date();

    // Check if the article is in headline if is_in_headline is specified
    const isInHeadline =
      is_in_headline === undefined ||
      item.data.is_in_headline === is_in_headline;

    // Check if the article is in the news ticker if is_in_news_ticker is specified
    const isInNewsTicker =
      is_in_news_ticker === undefined ||
      item.data.is_in_news_ticker === is_in_news_ticker;

    return isNotDraft && isBeforeNow && isInHeadline && isInNewsTicker;
  });

  if (sortByDate) {
    articles.sort((a, b) =>
      b.data.published_time.localeCompare(a.data.published_time)
    );
  }

  return limit ? articles.slice(0, limit) : articles;
};

export const getArticlesByTag = (articles: CollectionEntry<"articles">[], tag: string) => {
  return articles.filter((article) => article.data.tags.some((t) => t.id === tag));
}

export const getArticlesByCategory = (articles: CollectionEntry<"articles">[], category: string) => {
  return articles.filter((article) => article.data.category.id === category);
}