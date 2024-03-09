import type { ComponentType, SvelteComponent } from 'svelte';

export type PostMetadata = {
	description: string;
	published: boolean;
	thumbnail: string;
	title: string;
	date: string;
	slug: string;
};

export type Post = {
	meta: PostMetadata;
	content: ComponentType<SvelteComponent>;
};

export const getAllBlogPosts = async () =>
	await Promise.all(
		Object.entries(import.meta.glob('../../content/blog/*.md')).map(async ([path, resolver]) => {
			const resolved = (await resolver()) as { metadata: PostMetadata };
			const { metadata } = resolved;
			const slug = path.split('/').pop()?.slice(0, -3) ?? '';

			return {
				meta: {
					...metadata,
					slug
				}
			};
		})
	);
