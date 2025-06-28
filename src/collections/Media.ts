import type { CollectionConfig } from "payload";
import { generateBlurData } from "@/utils/generateBlurData";

export const Media: CollectionConfig = {
	slug: "media",
	upload: true,
	folders: true,
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
		{
			name: "blurData",
			type: "text",
			admin: {
				hidden: true,
				disableListColumn: true,
				disableListFilter: true,
			},
		},
	],
	hooks: {
		beforeValidate: [generateBlurData],
	},
};
