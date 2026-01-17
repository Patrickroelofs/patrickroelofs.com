import type { Block } from "payload";
import { COLLECTION_SLUGS } from "@/collections";
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
};
