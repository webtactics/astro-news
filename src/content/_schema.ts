import { z, reference, type ImageFunction } from "astro:content";

export const articleSchema = (image: ImageFunction) => {
 return  z.object({
    is_draft: z.boolean().default(false),
    is_important: z.boolean().default(false),
    title: z.string({message: "Title is required"}),
    description: z.string({message: "Description is required"}),
    cover: image(),
    cover_alt: z.string({message: "Image alt text is required"}),
    published_time: z.string({message:"Published time is required"}).or(z.date({message:"Published time is required"})).transform((value) => new Date(value).toISOString()),
    authors: z.array(reference("authors")).min(1, {message: "At least one author is required"}),
    tags: z.array(reference("tags")).min(1, {message: "At least one tag is required"}).max(4, {message: "At most four tags are allowed"}),
    category: reference("categories"),
  });
}

export const authorSchema = (image: ImageFunction) => {
  return z.object({
    name: z.string({message: "Name is required"}),
    avatar: image().refine((image) => image.width > 400 && image.width < 1200, {
      message: "Avatar must be at least 400px wide and at most 1200px wide",
    }),
    links: z.array(z.object({
      title: z.string(),
      href: z.string(),
    })).optional(),
  });
}

export const categorySchema = () => {
  return  z.object({
    name: z.string({message: "Category name is required"}),
    path: z.string({message: "Category path is required"}),
  });
}

export const tagSchema = () => {
  return z.object({
  name: z.string({message: "Tag name is required"}),
  path: z.string({message: "Tag path is required"}),
});
}