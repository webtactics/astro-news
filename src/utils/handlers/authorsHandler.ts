import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { articlesHandler } from "./articlesHandler";

const authorCollection = await getCollection("authors");

export const authorsHandler = {
  getTopAuthors: async (count: number) => {
    const articles = await articlesHandler.getAllArticles();
    const authorMap = new Map();
    articles.forEach((article) => {
      article.data.authors.forEach((author) => {
        if (!authorMap.has(author.id)) {
          authorMap.set(author.id, { author: author.id, count: 0 });
        }
        const authorEntry = authorMap.get(author.id);
        authorMap.set(author.id, { ...authorEntry, count: authorEntry.count + 1 });
      });
    });
    const sortedAuthors = Array.from(authorMap.values()).sort((a, b) => b.count - a.count);
    const topAuthors = sortedAuthors.slice(0, count);
    return topAuthors;
  },
  getAuthor: async (id: string) => {
    const author = await getEntry('authors', id);
    if (author === undefined) {
      throw new Error(`Author with id ${id} not found`);
    }
    return author;
  },
};
