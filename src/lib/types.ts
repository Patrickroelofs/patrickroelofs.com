import * as z from 'zod';

export const allBlogPostsSchema = z.array(
	z.object({
		thumbnail: z.object({
			asset: z.object({
				_type: z.string(),
				_ref: z.string()
			}),
			_type: z.string()
		}),
		description: z.string(),
		title: z.string(),
		slug: z.string()
	})
);

export type AllBlogPosts = z.infer<typeof allBlogPostsSchema>;
export type SingleBlogPost = z.infer<typeof allBlogPostsSchema>[0];

export const AssetSchema = z.object({
	asset: z.object({
		_type: z.string(),
		_ref: z.string()
	}),
	_type: z.string()
});

export type Asset = z.infer<typeof AssetSchema>;
