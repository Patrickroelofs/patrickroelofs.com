import { seoFields } from "@/fields/seo";
import { HeroBlock } from "@/patterns/Hero/Hero.block";
import { revalidateAfterChange } from "@/util/revalidateAfterChange";
import type { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
	slug: "pages",
	admin: {
		useAsTitle: "title",
	},
	fields: [
		{
			name: "title",
			type: "text",
			label: "Title",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			label: "Slug",
			required: true,
		},
		{
			type: "tabs",
			tabs: [
				{
					label: "Content",
					name: "content",
					fields: [
						{
							name: "blocks",
							type: "blocks",
							blocks: [HeroBlock],
						},
					],
				},
				seoFields,
			],
		},
	],
	versions: {
		drafts: {
			autosave: true,
			schedulePublish: true,
		},
	},
	hooks: {
		afterChange: [revalidateAfterChange],
	},
};
