import { payload } from "@/util/getPayloadConfig";
import { getServersideURL } from "@/util/getServersideURL";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = getServersideURL();

	const pages = await payload.find({
		collection: "pages",
		limit: 0,
		where: {},
	});

	return [
		...pages.docs.map(({ slug, updatedAt }) => ({
			url: `${url}/${slug === "home" ? "" : slug}`,
			lastModified: new Date(updatedAt),
		})),
	];
}
