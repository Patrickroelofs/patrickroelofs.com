import type { FieldHook } from "payload";

/**
 * Formats a string into a URL-friendly slug.
 * Replaces spaces with dashes, removes non-word characters, and converts to lowercase.
 * @param val - The string to format as a slug.
 * @returns The formatted slug string.
 */
const format = (val: string): string =>
	val
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "")
		.toLowerCase();

/**
 * Field Hook to automatically generate a slug from a separate field.
 *
 * @param fallback - The field name to use as a fallback for slug generation.
 * @returns A Field that formats the fallback field as a slug on create or update operations.
 */
const formatSlug =
	(fallback: string): FieldHook =>
	({ data, originalDoc }) => {
		const fallbackData = data?.[fallback] || originalDoc?.[fallback];

		return format(fallbackData);
	};

export default formatSlug;
