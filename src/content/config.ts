import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(), // used as the meta description AND the OG/AI-search snippet — write it like a direct answer
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.string().default("SEO & AI Search"),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
