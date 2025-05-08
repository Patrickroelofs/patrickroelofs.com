import type { Block } from "payload";
import { spacingField } from "@/fields/spacing";

const TitleBlock: Block = {
	slug: "title",
	interfaceName: "TitleBlockType",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					fields: [
						{
							name: "title",
							label: "Title",
							type: "text",
							required: true,
						},
						{
							name: "subtitle",
							label: "Subtitle",
							type: "text",
							required: false,
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

export { TitleBlock };
