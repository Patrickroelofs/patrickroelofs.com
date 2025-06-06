import type { Config, Media, Page } from "@/payload-types";
import type { Metadata } from "next";
import { getApplicationURL } from "./getApplicationURL";
import { mergeOpenGraph } from "./mergeMetadata";
import { payload } from "./getPayloadConfig";

function getImageURL(
	image?: Media | Config["db"]["defaultIDType"] | null,
): string | undefined {
	const serverURL = getApplicationURL();
	let url = serverURL;

	if (image && typeof image === "object") {
		const ogURL = image.url;

		url = ogURL ? serverURL + ogURL : serverURL + url;

		return url;
	}

	// TODO: Implement default image
	return undefined;
}

async function generateMeta(args: {
	doc: Partial<Page>;
	collection: "pages";
}): Promise<Metadata> {
	const { metadata } = await payload.findGlobal({
		slug: "settings",
	});

	const { doc } = args || {};

	const ogImage = getImageURL(doc.seo?.image);

	const slug = doc.slug === "home" ? "" : `/${doc.slug}`;
	const collection = args.collection === "pages" ? "" : `/${args.collection}`;
	const url = `${getApplicationURL()}${collection}${slug}`;

	return {
		title: `${doc.seo?.title} | ${metadata.siteName}`,
		description: doc.seo?.description || metadata.siteDescription,
		openGraph: mergeOpenGraph({
			title: `${doc.seo?.title} | ${metadata.siteName}`,
			description: doc.seo?.description || metadata.siteDescription,
			images: ogImage ? [{ url: ogImage }] : [],
			url,
		}),
		alternates: {
			canonical: url,
		},
	};
}

export { generateMeta };
