import { getApplicationURL } from "@/util/getApplicationURL";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const url = getApplicationURL();

	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/admin"],
		},
		sitemap: `${url}/sitemap.xml`,
	};
}
