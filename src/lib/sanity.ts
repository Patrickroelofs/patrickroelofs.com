import { createClient } from '@sanity/client';
import { env } from '$env/dynamic/public';

import type { AllBlogPosts } from './types';

export const sanityClient = () => {
	const config = {
		projectId: env.PUBLIC_SANITY_PROJECT_ID,
		dataset: env.PUBLIC_SANITY_DATASET,
		apiVersion: '2024-02-06'
	};

	return createClient(config);
};

export const getAllBlogPosts = async (): Promise<AllBlogPosts> => {
	const client = sanityClient();

	const query = `*[_type == "Blog"] | order(publishedAt desc) {
    title,
    description,
    slug,
    thumbnail
  }`;

	return await client.fetch(query);
};
