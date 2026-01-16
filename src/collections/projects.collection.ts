import { type CollectionConfig, slugField } from "payload";

export const ProjectsCollection: CollectionConfig = {
	slug: "projects",
	folders: true,
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			type: "tabs",
			tabs: [
				{
					label: "General",
					name: "general",
					fields: [
						{
							name: "content",
							type: "richText",
							required: false,
						},
					],
				},
				{
					label: "Meta",
					name: "meta",
					fields: [
						{
							name: "shortDescription",
							type: "text",
							required: true,
						},
						{
							name: "longDescription",
							type: "textarea",
							required: false,
						},
					],
				},
			],
		},
		slugField({
			useAsSlug: "title",
			position: "sidebar",
		}),
	],
	versions: {
		drafts: true,
	},
};
