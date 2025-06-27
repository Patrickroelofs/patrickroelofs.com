import { draftMode } from "next/headers";
import type { CollectionConfig } from "payload";

export const Blog: CollectionConfig = {
	slug: "blog",
	admin: {
		livePreview: {
			async url(args) {
				const draft = await draftMode();
				draft.enable();

				return `/blog/${args.data.slug}`;
			},
		},
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "description",
			type: "textarea",
			required: true,
		},
		{
			name: "image",
			type: "upload",
			relationTo: "media",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
			admin: {
				position: "sidebar",
			},
		},
		{
			name: "content",
			type: "richText",
			required: true,
		},
	],
	versions: {
		drafts: {
			schedulePublish: true,
			autosave: {
				interval: 1000,
				showSaveDraftButton: true,
			},
		},
	},
};
