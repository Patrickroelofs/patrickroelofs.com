import type { Block } from "payload";
import { spacingField } from "@/fields/spacing";
import { TitleBlock } from "../title/title.block";

const ContainerBlock: Block = {
	slug: "container",
	interfaceName: "ContainerBlockType",
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
							blocks: [TitleBlock],
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

export { ContainerBlock };
