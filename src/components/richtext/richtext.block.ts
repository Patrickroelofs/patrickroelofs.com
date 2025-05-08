import { spacingField } from "@/fields/spacing";
import type { Block } from "payload";

const RichTextBlock: Block = {
	slug: "rich-text",
	interfaceName: "RichTextType",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							label: "Rich Text",
							name: "richText",
							type: "richText",
						},
					],
				},
				{
					label: "Settings",
					fields: [spacingField()],
				},
			],
		},
	],
};

export { RichTextBlock };
