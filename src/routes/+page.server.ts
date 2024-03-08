import { getAllBlogPosts } from '../lib/retrieveBlogPosts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getAllBlogPosts({
		includeUnpublished: true
	});

	return {
		posts
	};
};
