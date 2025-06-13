import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	upload: true,
	folders: true,
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: false,
		},
	],
	hooks: {},
};
