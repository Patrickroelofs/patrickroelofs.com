import { iconField } from "@/fields/icon";
import type { GlobalConfig } from "payload";

export const Settings: GlobalConfig = {
	slug: "settings",
	fields: [
		{
			type: "tabs",
			tabs: [
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
};
