import { RichTextBlock } from "@/components/richtext/richtext.block";
import type { Block } from "payload";
import { GridBlock } from "../grid/grid.block";
import { ScrollingTextBlock } from "../scrolling-text/scrolling-text.block";

const StickyTitleBlock: Block = {
	slug: "sticky-title",
	interfaceName: "StickyTitleType",
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
							blocks: [RichTextBlock, GridBlock, ScrollingTextBlock],
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
