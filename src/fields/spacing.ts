import { type Field, deepMerge } from "payload";

const spacingOptions = [
	{ label: "3xs", value: "3xs" },
	{ label: "2xs", value: "2xs" },
	{ label: "xs", value: "xs" },
	{ label: "s", value: "s" },
	{ label: "m", value: "m" },
	{ label: "l", value: "l" },
	{ label: "xl", value: "xl" },
	{ label: "2xl", value: "2xl" },
	{ label: "3xl", value: "3xl" },
];

type SpacingField = () => Field;

const spacingField: SpacingField = () => ({
	type: "row",
	fields: [
		{
			name: "topSpacing",
			label: "Top Spacing",
			type: "select",
			interfaceName: "Spacing",
			options: spacingOptions,
			required: false,
		},
		{
			name: "bottomSpacing",
			label: "Bottom Spacing",
			type: "select",
			interfaceName: "Spacing",
			options: spacingOptions,
			required: false,
		},
	],
});

export { spacingField };
