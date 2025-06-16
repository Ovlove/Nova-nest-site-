// src/content/config.ts
import { defineCollection } from 'astro:content';
import { z } from 'zod';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.date().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
