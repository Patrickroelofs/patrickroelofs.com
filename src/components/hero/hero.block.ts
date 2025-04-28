import type { Block } from "payload";

const HeroBlock: Block = {
	slug: "hero",
	interfaceName: "HeroBlockType",
	labels: {
		singular: "Hero",
		plural: "Hero",
	},
	fields: [
		{
			name: "image",
			label: "Image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "title",
			label: "Title",
			type: "textarea",
			required: true,
		},
		{
			name: "subtitle",
			label: "Subtitle",
			type: "text",
			required: true,
		},
	],
};

export { HeroBlock };
