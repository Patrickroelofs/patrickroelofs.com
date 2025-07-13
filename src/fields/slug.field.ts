import { deepMerge, type Field } from "payload";
import formatSlug from "@/utils/formatSlug";

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

export const slugField: Slug = (fieldToUse = "title", overrides = {}) =>
	deepMerge(
		{
			name: "slug",
			type: "text",
			admin: {
				readOnly: true,
				position: "sidebar",
				description:
					"A unique identifier for the document, used in URLs, will be auto generated or converted to proper format.",
			},
			hooks: {
				beforeValidate: [formatSlug(fieldToUse)],
			},
			defaultValue: () => Date.now().toString(36),
			required: true,
			unique: true,
			index: true,
			label: "Slug",
		},
		overrides,
	);
