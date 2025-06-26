import { payload } from "@/utils/getPayloadConfig";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = process.env.NEXT_PUBLIC_URL || "";

	const blogPosts = await payload.find({
		collection: "blog",
	});

	const projects = await payload.find({
		collection: "projects",
	});

	return [
		...blogPosts.docs.map(({ slug, updatedAt }) => ({
			url: `${url}/blog/${slug}`,

			lastModified: new Date(updatedAt),
			priority: 0.9,
		})),
		...projects.docs.map(({ slug, updatedAt }) => ({
			url: `${url}/projects/${slug}`,
			lastModified: new Date(updatedAt),
			priority: 0.9,
		})),
		{
			url: `${url}/`,
			lastModified: new Date(),
			priority: 1.0,
		},
		{
			url: `${url}/blog`,
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: `${url}/projects`,
			lastModified: new Date(),
			priority: 0.9,
		},
	];
}
