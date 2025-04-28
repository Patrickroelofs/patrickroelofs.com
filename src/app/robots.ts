import { getServersideURL } from "@/util/getServersideURL";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const url = getServersideURL();

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin"],
		},
		sitemap: `${url}/sitemap.xml`,
	};
}
