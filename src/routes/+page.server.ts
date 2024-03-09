import { getAllBlogPosts } from '$lib/functions/getAllBlogPosts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getAllBlogPosts();

	return {
		posts: posts
	};
};
