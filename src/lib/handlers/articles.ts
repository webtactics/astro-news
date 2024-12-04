import { getCollection } from "astro:content";
import { log } from "console";

const articlesCollection = await getCollection('articles');

export const articlesHandler = {

    allArticles: () => articlesCollection.filter((article) => article.data.isDraft !== true),

    headlineBig: () => articlesCollection.filter((article) => article.data.isDraft !== true && article.data.isBigHeadline === true)[0],

    headlineSmall: () => {
        const bigHeadline = articlesHandler.headlineBig();
        log(bigHeadline.id);
        return articlesCollection.filter((article) => article.data.isDraft !== true && article.data.isSmallHeadline === true && bigHeadline.id !== article.id).slice(0, 4);
    },

    latestNews: () => {
        const bigHeadline = articlesHandler.headlineBig();
        const smallHeadlines = articlesHandler.headlineSmall();
    }
}
