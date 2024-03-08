import { getSingleBlogPost } from '$lib/retrieveBlogPosts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await getSingleBlogPost({
		slug: params.slug
	});

	return {
		...post
	};
};
