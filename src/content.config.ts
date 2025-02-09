import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    published: z.boolean(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/data/authors" }),
  schema: z.object({
    title: z.string(),
    avatar: z.string(),
    twitter: z.string(),
  }),
});

// Expose your defined collection to Astro
// with the `collections` export
export const collections = { blog, authors };
