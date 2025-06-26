import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
	slug: "projects",
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
	],
};
