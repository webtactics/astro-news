import { z } from "astro:content";
import type { ImageFunction } from "astro:content";

export const articleSchema = (image: ImageFunction) => z.object({
  isDraft: z.boolean().default(false),
  isBigHeadline: z.boolean().default(false),
  isSmallHeadline: z.boolean().default(false),
  cover: image(),
  covert_alt: z.string().optional(),
  title: z.string().max(60, "Too long, max 60 characters"),
  description: z.string().max(160, "Too long, max 160 characters"),
  category: z.string(),
})

export const viewSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.any()),
})