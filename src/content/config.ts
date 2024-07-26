import { defineCollection, z } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  author: z.string(),
  pubDate: z.date(),
  description: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
});

export type Post = z.infer<typeof postSchema>;

const posts = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = { posts };
