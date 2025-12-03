import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	upload: {
		imageSizes: [
			{
				name: "thumbnail",
				width: 375,
				height: 280,
			},
			{
				name: "large",
				width: 1240,
				height: 700,
			},
			{
				name: "square-full",
				width: 1200,
				height: 1200,
			},
		],
	},
	folders: true,
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
	],
};
