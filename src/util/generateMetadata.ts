import type { Config, Media, Page } from "@/payload-types";
import type { Metadata } from "next";
import { getServersideURL } from "./getServersideURL";
import { mergeOpenGraph } from "./mergeMetadata";

function getImageURL(
	image?: Media | Config["db"]["defaultIDType"] | null,
): string | undefined {
	const serverURL = getServersideURL();
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
	collection: "pages" | "blog";
}): Promise<Metadata> {
	const { doc } = args || {};

	const ogImage = getImageURL(doc.meta?.image);
	const title = doc.meta?.title || "";
	const description = doc.meta?.description || "";

	const slug = doc.slug === "home" ? "" : `/${doc.slug}`;
	const collection = args.collection === "pages" ? "" : `/${args.collection}`;
	const url = `${getServersideURL()}${collection}${slug}`;

	return {
		title,
		description,
		openGraph: mergeOpenGraph({
			title,
			description,
			images: ogImage ? [{ url: ogImage }] : [],
			url,
		}),
		alternates: {
			canonical: url,
		},
	};
}

export { generateMeta };
