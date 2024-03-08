const slugFromPath = (path: string) => path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;

type BlogPostMetadataType = {
	title: string;
	slug: string;
	date: string;
	description: string;
	published: boolean;
};

export type BlogPostType = {
	metadata: BlogPostMetadataType;
};

type GetAllBlogPostsProps = {
	includeUnpublished: boolean;
};

export const getAllBlogPosts = async ({ includeUnpublished }: GetAllBlogPostsProps) => {
	console.log(includeUnpublished);
	const files = import.meta.glob('/src/content/blog/*.{md,svx,svelte.md}');

	const posts = await Promise.all(
		Object.entries(files).map(async ([path, resolver]) => {
			const slug = slugFromPath(path);
			const { metadata } = (await resolver()) as { metadata: BlogPostType['metadata'] };

			return {
				metadata: {
					...metadata,
					slug
				}
			};
		})
	);

	const filteredPosts = includeUnpublished
		? posts
		: posts.filter((post) => post.metadata.published === false);

	filteredPosts.sort((a, b) => (new Date(a.metadata.date) > new Date(b.metadata.date) ? -1 : 1));

	return filteredPosts;
};
