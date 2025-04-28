import { iconField } from "@/fields/icon";
import { revalidateAfterChange } from "@/util/revalidateAfterChange";
import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
	slug: "settings",
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					label: "Navigation",
					fields: [
						{
							name: "navigation",
							type: "array",
							label: "Navigation",
							required: true,
							fields: [
								{
									name: "link",
									type: "relationship",
									relationTo: "pages",
									label: "Link",
									required: true,
								},
								{
									name: "overrideLabel",
									type: "checkbox",
									label: "Override Label",
									defaultValue: false,
								},
								{
									name: "label",
									type: "text",
									label: "Label",
									admin: {
										condition: (_, siblingData) => siblingData?.overrideLabel,
									},
								},
							],
						},
					],
				},
				{
					label: "Footer",
					fields: [
						{
							name: "socials",
							type: "array",
							label: "Socials",
							required: true,
							fields: [
								{
									type: "row",
									fields: [
										iconField(),
										{
											name: "link",
											type: "text",
											label: "Link",
											required: true,
										},
									],
								},
							],
						},
					],
				},
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
