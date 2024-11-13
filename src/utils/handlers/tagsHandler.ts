import {
  getCollection,
  type CollectionEntry,
  type ImageFunction,
} from "astro:content";

const tagCollection = await getCollection("tags");

export const tagsHandler = {
  getAllTags: async (article: CollectionEntry<"articles">) => {
    const tags = article.data.tags
      .map((articleTag) => {
        const foundTag = tagCollection.find(
          (collectionTag) => articleTag.id === collectionTag.data.path
        );
        return foundTag
          ? { name: foundTag.data.name, path: foundTag.data.path }
          : null;
      })
      .filter(
        (tag): tag is { name: string; path: string; icon: ImageFunction } =>
          tag !== null
      );
    return tags;
  },
};
