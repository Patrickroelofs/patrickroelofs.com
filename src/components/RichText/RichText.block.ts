import type { Block } from "payload";

const RichTextBlock: Block = {
	slug: "richText",
	interfaceName: "RichTextBlockType",
	fields: [
		{
			label: "Rich Text",
			name: "richText",
			type: "richText",
		},
	],
};

export { RichTextBlock };
