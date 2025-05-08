import { spacingField } from "@/fields/spacing";
import { ParagraphFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

const ScrollingTextBlock: Block = {
	slug: "scrolling-text",
	interfaceName: "ScrollingTextType",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "text",
							type: "textarea",
							label: "Text",
							required: true,
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

export { ScrollingTextBlock };
