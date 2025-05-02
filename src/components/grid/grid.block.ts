import type { Block } from "payload";
import { RichTextBlock } from "../richtext/richtext.block";

const GridBlock: Block = {
	slug: "grid",
	interfaceName: "GridBlockType",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "content",
							label: "Content",
							type: "blocks",
							blocks: [RichTextBlock],
						},
					],
				},
				{
					label: "Settings",
					fields: [
						{
							name: "columns",
							label: "Columns",
							type: "select",
							defaultValue: "3",
							required: true,
							admin: {
								description:
									"The number of columns to display the content in, automatically changes on tablet and mobile.",
							},
							options: [
								{
									label: "2 Columns",
									value: "2",
								},
								{
									label: "3 Columns",
									value: "3",
								},
								{
									label: "4 Columns",
									value: "4",
								},
								{
									label: "5 Columns",
									value: "5",
								},
								{
									label: "6 Columns",
									value: "6",
								},
							],
						},
					],
				},
			],
		},
	],
};

export { GridBlock };
