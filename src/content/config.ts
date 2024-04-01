import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
	schema: z.object({
		content: z.string(),
		pubDate: z.string(),
		title: z.string()
	}),
	type: 'content'
})

export const collections = {
	blogPosts: blogCollection
}
