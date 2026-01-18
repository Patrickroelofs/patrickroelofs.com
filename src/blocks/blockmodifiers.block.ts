import type { Tab } from "payload";

export const BlockModifiers: Tab[] = [
	{
		label: "Modifiers",
		name: "modifiers",
		fields: [
			{
				name: "spacing",
				type: "select",
				options: [
					{
						label: "None",
						value: "none",
					},
					{
						label: "Small",
						value: "small",
					},
					{
						label: "Medium",
						value: "medium",
					},
					{
						label: "Large",
						value: "large",
					},
				],
				defaultValue: "none",
				required: true,
			},
		],
	},
];
