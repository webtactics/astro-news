import { z } from "astro:content";

export const articleSchema = z.object({
  title: z.string().max(60, "Too long, max 60 characters"),
  description: z.string().max(160, "Too long, max 160 characters"),
  category: z.string(),
})

export const viewSchema = z.object({
  title: z.string(),
  description: z.string(),
  blocks: z.array(z.any()),
})