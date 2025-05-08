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

type SpacingField = (overrides?: Partial<Field>) => Field;

const spacingField: SpacingField = (overrides = {}) =>
	deepMerge(
		{
			name: "spacing",
			label: "Spacing",
			type: "select",
			interfaceName: "Spacing",
			options: spacingOptions,
			required: false,
		},
		overrides,
	);

export { spacingField };
