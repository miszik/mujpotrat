import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const clanky = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/clanky' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    pinned: z.boolean().optional().default(false),
    kategorie: z.enum(['moje-pribehy', 'telo-a-pece', 'pribehy-jinych', 'ostatni']).optional(),
  }),
});

export const collections = { clanky };
