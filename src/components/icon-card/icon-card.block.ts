import { iconField } from "@/fields/icon";
import { ParagraphFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

const IconCardBlock: Block = {
	slug: "icon-card",
	interfaceName: "IconCardType",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						iconField(),
						{
							name: "title",
							type: "text",
							label: "Title",
							required: true,
						},
						{
							name: "text",
							type: "richText",
							label: "Text",
							required: true,
							editor: lexicalEditor({
								features: [ParagraphFeature()],
							}),
						},
					],
				},
			],
		},
	],
};

export { IconCardBlock };
