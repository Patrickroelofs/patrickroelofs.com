import { revalidatePath, revalidateTag } from "next/cache";

export type RevalidatePathType = "page" | "layout";

export interface RevalidatePathsOptions {
	/**
	 * Passed to Next.js `revalidatePath(path, type)`.
	 * Use "page" to revalidate a specific page; use "layout" to revalidate
	 * data for a layout segment.
	 */
	type?: RevalidatePathType;
	/**
	 * Optional cache tags to revalidate alongside paths.
	 */
	tags?: readonly string[];
}

const normalizePath = (path: string): string => {
	const trimmedPath = path.trim();

	if (trimmedPath.length === 0) {
		throw new Error("revalidatePaths: path cannot be empty.");
	}

	const withLeadingSlash = trimmedPath.startsWith("/") ? trimmedPath : `/${trimmedPath}`;

	if (withLeadingSlash !== "/" && withLeadingSlash.endsWith("/")) {
		return withLeadingSlash.slice(0, -1);
	}

	return withLeadingSlash;
};

const uniqueStrings = (values: readonly string[]): string[] => {
	const seen = new Set<string>();
	const result: string[] = [];

	for (const value of values) {
		if (seen.has(value)) {
			continue;
		}

		seen.add(value);
		result.push(value);
	}

	return result;
};

/**
 * Revalidates multiple paths (and optionally tags) in Next.js App Router.
 */
export const revalidatePaths = (
	paths: readonly string[],
	options: RevalidatePathsOptions = {}
): void => {
	const normalizedPaths = uniqueStrings(paths.map(normalizePath));

	for (const path of normalizedPaths) {
		console.log("Revalidating path:", path, "with type:", options.type);
		revalidatePath(path, options.type);
	}

	if (options.tags && options.tags.length > 0) {
		const tags = uniqueStrings(
			options.tags.map((tag) => tag.trim()).filter((tag) => tag.length > 0)
		);

		for (const tag of tags) {
			console.log("Revalidating tag:", tag);
			revalidateTag(tag);
		}
	}
};
