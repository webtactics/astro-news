import { reference, z } from "astro:content";
import type { ImageFunction } from "astro:content";

export const articleSchema = (image: ImageFunction) => z.object({
  isDraft: z.boolean().default(false),
  isBigHeadline: z.boolean().default(false),
  isSmallHeadline: z.boolean().default(false),
  cover: image(),
  covert_alt: z.string().optional(),
  title: z.string().max(60, "Too long, max 60 characters"),
  description: z.string().max(160, "Too long, max 160 characters"),
  category: reference("categories"),
})

export const viewSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.any()),
})

export const categorySchema = z.object({
  title: z.string(),
  path: z.string().regex(
    /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
    "The string must be a slug (only lowercase letters, numbers, and hyphens)."
  ),
})