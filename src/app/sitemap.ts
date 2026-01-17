import type { MetadataRoute } from "next";
import { COLLECTION_SLUGS } from "@/collections";
import { env } from "@/env";
import { payload } from "@/utils/getPayloadConfig";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = env.NEXT_PUBLIC_URL;

	const projects = await payload.find({
		collection: COLLECTION_SLUGS.PROJECTS,
		limit: 1000,
		draft: false,
		pagination: false,
		select: {
			slug: true,
			updatedAt: true,
		},
	});

	return [
		{
			url: `${url}/`,
			lastModified: new Date(),
			priority: 1.0,
		},
		...projects.docs.map((project) => ({
			url: `${url}/projects/${project.slug}`,
			lastModified: new Date(project.updatedAt),
			priority: 0.8,
		})),
	];
}
