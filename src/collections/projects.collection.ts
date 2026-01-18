import { type CollectionConfig, slugField } from "payload";
import { revalidatePaths } from "@/utils/revalidatePaths";

export const ProjectsCollection: CollectionConfig = {
	slug: "projects",
	folders: true,
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "title",
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
							name: "thumbnail",
							type: "upload",
							relationTo: "media",
							required: false,
						},
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
	hooks: {
		afterChange: [
			({ data }) => {
				if (data._status === "published") {
					revalidatePaths(["/", `/projects/${data.slug}`]);
				}
			},
		],
	},
};
