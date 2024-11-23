import { z, reference, type ImageFunction } from "astro:content";

export const pageSchema = () => z.object({
    title: z.string({ message: "Title is required" }),

    description: z.string({ message: "Description is required" }),

    noIndex: z.boolean().default(false),

    noFollow: z.boolean().default(false),

    type: z.enum(["website"]),

    blocks: z.array(z.any()),
  });

export const articleSchema = (image: ImageFunction) => z.object({
    title: z
      .string({ message: "Meta Title is required" })
      .min(30, { message: "Title is too short" })
      .max(60, { message: "Title is too long" }),

    description: z
      .string({ message: "Description is required" })
      .min(60, { message: "Description is too short" })
      .max(160, { message: "Description is too long" }),

    isDraft: z.boolean().default(false),

    isInNewsTicker: z.boolean().default(false),

    isInHeadlines: z.boolean().default(false),

    isBigItemHeadline: z.boolean().default(false),

    publishedAt: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),

    modifiedAt: z
      .string()
      .or(z.date())
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),

    authors: z
      .array(reference("authors"))
      .min(1, { message: "At least one author is required" }),

    section: z.string(),

    category: reference("categories"),

    tags: z
      .array(reference("tags"))
      .min(1, { message: "At least one tag is required" })
      .max(5, { message: "Maximum of 5 tags allowed" }),

    image: image(),

    imageAlt: z.string(),

    noIndex: z.boolean().default(false),

    noFollow: z.boolean().default(false),

    type: z.enum(["article"]),
  });

export const authorSchema = (image: ImageFunction) =>  z.object({
    name: z.string({ message: "Author Name is required" }),
    avatar: image(),
    bio: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          path: z.string(),
        })
      )
      .optional(),
  });

export const tagSchema = (image: ImageFunction) =>  z.object({
    name: z.string({ message: "Tag Name is required" }),
    path: z.string({ message: "Tag Path is required" }),
  });


export const categorySchema = (image: ImageFunction) =>  z.object({
    name: z.string({ message: "Category Name is required" }),
    path: z.string({ message: "Category Path is required" }),
  });

