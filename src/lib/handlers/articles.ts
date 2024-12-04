import { getCollection } from "astro:content";

const articlesCollection = await getCollection('articles');

export const articlesHandler = {

    allArticles: () => articlesCollection.filter((article) => article.data.isDraft !== true),

    headlineBig: () => articlesCollection.filter((article) => article.data.isDraft !== true && article.data.isBigHeadline === true)[0],

    headlineSmall: () => {
        const bigHeadline = articlesHandler.headlineBig();
        return articlesCollection.filter((article) => article.data.isDraft !== true && article.data.isSmallHeadline === true && bigHeadline.id !== article.id).slice(0, 4);
    },
}
