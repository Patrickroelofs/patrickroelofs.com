import { env } from "@/env";
import type { Blog } from "@/payload-types";

// TODO: Replace when Payload types are generated (when added to a block)
export interface LinkField {
	linkType?: ("internal" | "custom") | null;
	newTab?: boolean | null;
	url?: string | null;
	doc?: {
		relationTo: "blog";
		value: string | Blog;
	} | null;
	text?: string | null;
}

export type ParsedLink = {
	url: string;
	label: string | null;
	isExternal: boolean;
};

export function isExternalLink(url: string | null | undefined): boolean {
	if (!url || (!url.startsWith("http://") && !url.startsWith("https://"))) return false;
	const stripProtocol = (u: string) => u.replace(/^https?:\/\//, "");
	return !stripProtocol(url).startsWith(stripProtocol(env.NEXT_PUBLIC_URL));
}

export function parseLink(link?: LinkField & { label?: string | null }): ParsedLink {
	const invalidLink = {
		url: "#",
		label: "Invalid internal link",
		isExternal: false,
	};

	function handleInvalidLink(message: string): ParsedLink {
		console.warn(message, link);
		return invalidLink;
	}

	if (!link) return handleInvalidLink("Missing link object");

	const { linkType, doc, label = null, text = null, url = "#" } = link;

	if (linkType === "internal") {
		if (!doc) return handleInvalidLink("Internal link missing doc");

		const refValue = doc.value;

		if (typeof refValue === "string") {
			return handleInvalidLink("Unresolved reference value detected in internal link");
		}

		if (
			typeof refValue === "object" &&
			refValue &&
			"path" in refValue &&
			typeof refValue.path === "string"
		) {
			const title = typeof refValue.title === "string" ? refValue.title : "";
			return {
				url: refValue.path,
				label: label || text || title,
				isExternal: false,
			};
		}

		return handleInvalidLink("Invalid internal link structure");
	}

	return {
		url: url || "#",
		label: label || text,
		isExternal: isExternalLink(url),
	};
}
