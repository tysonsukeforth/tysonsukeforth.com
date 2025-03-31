import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

// Define loader and schema
const projectCollection = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        endDate: z.date(),
        images: z.array(z.object({
            src: z.string(),
            alt: z.string()
        })),
        tags: z.array(z.string())
    })
});

export const collections = { projectCollection };