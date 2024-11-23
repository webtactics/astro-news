import { getCollection } from "astro:content";

const articlesCollection = await getCollection("articles");

export const articlesHandler = {
  getAllArticles: async () => {
    const articles = articlesCollection.filter(
      (article) => article.data.isDraft !== true
    );
    return articles;
  },
  getArticlesForNewsTicker: async (count: number) => {
    const articles = articlesCollection
      .filter(
        (article) =>
          article.data.isInNewsTicker && article.data.isDraft !== true
      )
      .sort((a, b) =>
        b.data.publishedAt
          .toISOString()
          .localeCompare(a.data.publishedAt.toDateString())
      );
    return articles.slice(0, count);
  },

  getBigHeadlineArticle: async () => {
    const articles = articlesCollection
      .filter(
        (article) =>
          article.data.isBigItemHeadline && article.data.isDraft !== true
      )
      .sort((a, b) =>
        b.data.publishedAt
          .toISOString()
          .localeCompare(a.data.publishedAt.toDateString())
      );
    return articles[0];
  },

  getSmallHeadlineArticles: async (count: number) => {
    const bigHeadline = await articlesHandler.getBigHeadlineArticle();
    const articles = articlesCollection
      .filter(
        (article) =>
          article.data.isInHeadlines &&
          article.data.isDraft !== true &&
          article.id !== bigHeadline.id
      )
      .sort((a, b) =>
        b.data.publishedAt
          .toISOString()
          .localeCompare(a.data.publishedAt.toDateString())
      );
    return articles.slice(0, count);
  },

  getArticlesForLatestNews: async (count: number) => {
    const articles = articlesCollection
      .filter(
        (article) =>
          article.data.isDraft !== true
      )
      .sort((a, b) =>
        b.data.publishedAt
          .toISOString()
          .localeCompare(a.data.publishedAt.toDateString())
      ).slice(0, count);
    return articles;
  },
};
