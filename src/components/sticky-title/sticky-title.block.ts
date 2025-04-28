import { RichTextBlock } from "@/components/richtext/richtext.block";
import type { Block } from "payload";

const StickyTitleBlock: Block = {
	slug: "sticky-title",
	interfaceName: "StickyTitleBlock",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "title",
							type: "text",
							label: "Title",
							required: true,
						},
						{
							name: "blocks",
							type: "blocks",
							blocks: [RichTextBlock],
						},
					],
				},
				{
					label: "Settings",
					fields: [],
				},
			],
		},
	],
};

export { StickyTitleBlock };
