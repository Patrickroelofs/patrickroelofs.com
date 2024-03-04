import { createClient } from '@sanity/client';
import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';
import groq from 'groq';

import type { AllBlogPosts, BlogPost } from './types';

export const sanityClient = () => {
	const config = {
		projectId: PUBLIC_SANITY_PROJECT_ID,
		dataset: PUBLIC_SANITY_DATASET,
		apiVersion: '2024-02-06',
		useCdn: true
	};

	return createClient(config);
};

export const getAllBlogPosts = async (): Promise<AllBlogPosts> => {
	const client = sanityClient();

	const query = groq`*[_type == "Blog"] | order(publishedAt desc) {
    title,
    description,
    slug,
    thumbnail
  }`;

	return await client.fetch(query);
};

export const getSingleBlogPost = async (slug: string): Promise<BlogPost[]> => {
	const client = sanityClient();

	const query = groq`
		*[_type == "Blog" && slug.current == $slug] | order(publishedAt desc) {
			title,
			description,
			thumbnail
		}
	`;

	return await client.fetch(query, { slug });
};
