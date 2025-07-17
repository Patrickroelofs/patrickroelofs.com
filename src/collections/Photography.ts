import type { CollectionConfig } from "payload";
import { slugField } from "@/fields/slug.field";

export const Photography: CollectionConfig = {
	slug: "photography",
	labels: {
		singular: "Photography",
		plural: "Photography",
	},
	admin: {
		useAsTitle: "title",
		defaultColumns: ["slug", "title", "image"],
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		slugField("title"),
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
		},
	],
};
