import * as z from 'zod';

export const allBlogPostsSchema = z.array(
  z.object({
    description: z.string(),
    thumbnail: z.string(),
    title: z.string(),
    slug: z.string(),
  })
);

export type AllBlogPosts = z.infer<typeof allBlogPostsSchema>;
export type SingleBlogPost = z.infer<typeof allBlogPostsSchema>[0];