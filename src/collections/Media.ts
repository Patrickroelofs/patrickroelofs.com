import { generateBlurData } from "@/util/generateBlurData";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
	slug: "media",
	upload: true,
	admin: {
		folders: true,
	},
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "blurData",
			type: "text",
			admin: {
				hidden: true,
				disableListColumn: true,
				disableListFilter: true,
			},
		},
		{
			name: "alt",
			type: "text",
			required: false,
		},
	],
	hooks: {
		beforeValidate: [generateBlurData],
	},
};
