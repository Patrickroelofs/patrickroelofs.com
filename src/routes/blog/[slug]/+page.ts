import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	try {
		const post = await import(`../../../content/blog/${slug}.md`);

		return {
			content: post.default,
			meta: {
				...post.metadata,
				slug
			}
		};
	} catch (err) {
		return {
			status: 500,
			error: 'Could not load post...'
		};
	}
};
