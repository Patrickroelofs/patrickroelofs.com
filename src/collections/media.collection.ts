import type { CollectionConfig } from "payload";

export const MediaCollection: CollectionConfig = {
	slug: "media",
	upload: {
		imageSizes: [
			{
				name: "sm",
				width: 640,
			},
			{
				name: "md",
				width: 768,
			},
			{
				name: "lg",
				width: 1024,
			},
			{
				name: "xl",
				width: 1280,
			},
			{
				name: "2xl",
				width: 1536,
			},
			{
				name: "3xl",
				width: 1920,
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
