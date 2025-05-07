import { GridBlock } from "@/components/grid/grid.block";
import { HeroBlock } from "@/components/hero/hero.block";
import { RichTextBlock } from "@/components/richtext/richtext.block";
import { ScrollingTextBlock } from "@/components/scrolling-text/scrolling-text.block";
import { StickyTitleBlock } from "@/components/sticky-title/sticky-title.block";
import { seoFields } from "@/fields/seo";
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
							blocks: [
								HeroBlock,
								RichTextBlock,
								StickyTitleBlock,
								GridBlock,
								ScrollingTextBlock,
							],
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
