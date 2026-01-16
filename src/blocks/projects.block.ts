import type { Block } from "payload";
import { BLOCK_SLUGS } from ".";

export const ProjectsBlock: Block = {
	slug: BLOCK_SLUGS.PROJECTS,
	interfaceName: "ProjectsBlock",
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "featuredProject",
			type: "relationship",
			relationTo: "projects",
			required: true,
			hasMany: false,
		},
		{
			name: "projects",
			type: "relationship",
			relationTo: "projects",
			hasMany: true,
			required: false,
			maxRows: 4,
		},
	],
};
