import type { Block } from "payload";

export const ProjectsBlock: Block = {
	slug: "projectsBlock",
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
			required: false,
			hasMany: false,
		},
		{
			name: "projects",
			type: "relationship",
			relationTo: "projects",
			hasMany: true,
			required: true,
			maxRows: 4,
		},
	],
};
