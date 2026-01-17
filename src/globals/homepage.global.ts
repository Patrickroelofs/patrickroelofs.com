import type { GlobalConfig } from "payload";
import { ProjectsBlock } from "@/blocks/projects/projects.block";
import { TestimonialsBlock } from "@/blocks/testimonials/testimonials.block";
import { revalidatePaths } from "@/utils/revalidatePaths";
import { GLOBAL_SLUGS } from ".";

export const HomepageGlobal: GlobalConfig = {
	slug: GLOBAL_SLUGS.HOMEPAGE,
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
							name: "hero",
							type: "group",
							interfaceName: "HomepageHero",
							fields: [
								{
									name: "title",
									type: "text",
									required: true,
								},
								{
									name: "image",
									type: "upload",
									required: true,
									relationTo: "media",
								},
							],
						},
						{
							name: "content",
							type: "group",
							fields: [
								{
									name: "blocks",
									type: "blocks",
									required: false,
									blocks: [ProjectsBlock, TestimonialsBlock],
								},
							],
						},
					],
				},
				{
					label: "Meta",
					name: "meta",
					fields: [],
				},
			],
		},
	],
	versions: {
		drafts: true,
	},
	hooks: {
		afterChange: [
			({ data }) => {
				if (data._status === "published") {
					revalidatePaths(["/"]);
				}
			},
		],
	},
};
