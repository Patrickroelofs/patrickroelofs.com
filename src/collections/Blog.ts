import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
	slug: "blog",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "content",
			type: "richText",
			required: true,
		},
	],
};
