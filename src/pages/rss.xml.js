import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const blogPosts = await getCollection('blog')

	return rss({
		customData: `<language>en-EN</language>`,
		description: 'Patrick Roelofs - frontend web developer',
		items: blogPosts.map((post) => ({
			description: post.data.description,
			link: `https://patrickroelofs.com/blog/${post.slug}`,
			pubDate: post.data.pubDate,
			title: post.data.title
		})),
		site: context.site || 'https://patrickroelofs.com',
		title: 'Patrick Roelofs'
	})
}
