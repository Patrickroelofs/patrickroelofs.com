import type { CollectionConfig } from "payload";
import { slugField } from "@/fields/slug.field";

export const Projects: CollectionConfig = {
	slug: "projects",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		slugField("title"),
	],
};
