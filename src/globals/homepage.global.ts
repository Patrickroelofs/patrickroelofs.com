import type { GlobalConfig } from "payload";
import { ProjectsBlock } from "@/blocks/projects.block";

export const HomepageGlobal: GlobalConfig = {
	slug: "homepage",
	access: {
		read: () => true,
	},
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "General",
					name: "general",
					fields: [],
				},
				{
					label: "Page",
					name: "page",
					fields: [
						{
							name: "blocks",
							type: "blocks",
							required: false,
							blocks: [ProjectsBlock],
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
	],
	versions: {
		drafts: true,
	},
};
