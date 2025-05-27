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
								iconField(),
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
					label: "Social Media",
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
				{
					name: "metadata",
					label: "Metadata",
					fields: [
						{
							name: "siteName",
							type: "text",
							label: "Site Name",
							defaultValue: "My Site",
							required: true,
						},
						{
							name: "siteDescription",
							type: "text",
							label: "Site Description",
							defaultValue: "A great site built with Payload",
							required: true,
						},
						{
							name: "siteThemeColor",
							type: "text",
							label: "Site Theme Color",
							required: false,
							admin: {
								description: "Used for browser theme color",
							},
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
