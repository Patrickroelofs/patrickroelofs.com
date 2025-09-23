import type { MetadataRoute } from "next";
import { env } from "@/env";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = env.NEXT_PUBLIC_URL;
	return [
		{
			url: `${url}/`,
			lastModified: new Date(),
			priority: 1.0,
		},
	];
}
