import type { Block } from "payload";
import { COLLECTION_SLUGS } from "@/collections";
import { BLOCK_SLUGS } from "..";
import { BlockModifiers } from "../blockmodifiers.block";

export const ProjectsBlock: Block = {
	slug: BLOCK_SLUGS.PROJECTS,
	interfaceName: "ProjectsBlock",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					name: "content",
					fields: [
						{
							name: "title",
							type: "text",
							required: true,
						},
						{
							name: "featuredProject",
							type: "relationship",
							relationTo: COLLECTION_SLUGS.PROJECTS,
							required: true,
							hasMany: false,
						},
						{
							name: "projects",
							type: "relationship",
							relationTo: COLLECTION_SLUGS.PROJECTS,
							hasMany: true,
							required: false,
							maxRows: 4,
						},
					],
				},
				...BlockModifiers,
			],
		},
	],
};
