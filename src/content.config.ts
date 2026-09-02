import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const work = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/work",
  }),
  schema: z.object({
    title: z.string(),

    category: z.enum(["concerts", "travel", "moments"]),

    cover: z.string(),

    artist: z.string().optional(),
    venue: z.string().optional(),
    city: z.string().optional(),
    year: z.number().optional(),

    camera: z.string().optional(),

    images: z.array(z.string()),
  }),
});

const journal = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/journal",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  work,
  journal,
};
