import { getCollection, type CollectionEntry } from "astro:content";

const authorCollection = await getCollection("authors");

export const authorsHandler = {
  getAllAuthors: async (article: CollectionEntry<"articles">) => {
    const authors = article.data.authors
      .map((articleAuthor) => {
        const foundAuthor = authorCollection.find(
          (collectionAuthor) => articleAuthor.id === collectionAuthor.id
        );
        return foundAuthor
          ? { name: foundAuthor.data.name, path: foundAuthor.id }
          : null;
      })
      .filter(
        (author): author is { name: string; path: string } => author !== null
      );
    return authors;
  },
};
