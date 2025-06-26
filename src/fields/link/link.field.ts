import type { LinkFields } from "@payloadcms/richtext-lexical";
import type { CheckboxField, CollectionSlug, Field, GroupField, TextField } from "payload";

type KnownKeys<T> = keyof { [K in keyof T as string extends K ? never : K]: T[K] };

export type LinkFieldKey = KnownKeys<LinkFields> | "text";

export type LinkFieldOverrides = {
	linkType?: Partial<Omit<Field, "name">> | false;
	text?: Partial<Omit<TextField, "name">> | false;
	newTab?: Partial<Omit<CheckboxField, "name">> | false;
	url?: Partial<Omit<TextField, "name">> | false;
	doc?: Partial<Omit<Field, "name">> | false;
};

export type LinkFieldOptions = Partial<Omit<GroupField, "fields" | "name">> & {
	name?: string;
	fieldOverrides?: LinkFieldOverrides;
	relationTo: CollectionSlug[] | ReadonlyArray<CollectionSlug>;
};

export const linkField = (options: LinkFieldOptions): GroupField => {
	const { fieldOverrides = {}, relationTo, ...overrides } = options;
	if (overrides.name == null) {
		overrides.name = "link";
	}

	const {
		linkType: linkTypeOverride,
		text: textOverride,
		newTab: newTabOverride,
		url: urlOverride,
		doc: docOverride,
	} = fieldOverrides;

	const fields = [
		{
			type: "radio",
			defaultValue: "internal",
			options: [
				{ label: "Internal", value: "internal" },
				{ label: "Custom URL", value: "custom" },
			],
			...(linkTypeOverride !== false && linkTypeOverride ? linkTypeOverride : {}),
			name: "linkType" satisfies LinkFieldKey,
			admin: {
				layout: "horizontal",
				width: "50%",
				...(linkTypeOverride !== false && linkTypeOverride ? linkTypeOverride?.admin || {} : {}),
				...(linkTypeOverride === false ? { hidden: true } : {}),
			},
		},
		{
			type: "checkbox",
			label: "Open in new tab",
			...(newTabOverride !== false ? newTabOverride : {}),
			name: "newTab" satisfies LinkFieldKey,
			admin: {
				width: "50%",
				...(newTabOverride !== false && newTabOverride ? newTabOverride?.admin || {} : {}),
				...(newTabOverride === false ? { hidden: true } : {}),
			},
		},
		{
			type: "text",
			label: "Custom URL",
			required: true,
			...(urlOverride !== false && urlOverride ? urlOverride : {}),
			name: "url" satisfies LinkFieldKey,
			admin: {
				condition: (_: unknown, siblingData: { linkType?: string }) =>
					siblingData.linkType === "custom",
				width: textOverride !== false ? "50%" : undefined,
				...(urlOverride !== false && urlOverride ? urlOverride?.admin || {} : {}),
				...(urlOverride === false ? { hidden: true } : {}),
			},
		},
		{
			type: "relationship",
			label: "Document to link to",
			relationTo: [...relationTo],
			required: true,
			...(docOverride !== false && docOverride ? docOverride : {}),
			name: "doc" satisfies LinkFieldKey,
			admin: {
				condition: (_: unknown, siblingData: { linkType?: string }) =>
					siblingData.linkType === "internal",
				width: textOverride !== false ? "50%" : undefined,
				...(docOverride !== false && docOverride ? docOverride?.admin || {} : {}),
				...(docOverride === false ? { hidden: true } : {}),
			},
		},
		{
			type: "text",
			label: "Label",
			required: false,
			validate: (value: unknown, { siblingData }: { siblingData: { linkType?: string } }) => {
				const isVisible = textOverride !== false;
				if (siblingData?.linkType === "custom" && !value && isVisible) {
					return 'This field is required when link type is "custom"';
				}
				return true;
			},
			...(textOverride !== false && textOverride ? textOverride : {}),
			name: "text" satisfies LinkFieldKey,
			admin: {
				width: "50%",
				...(textOverride !== false && textOverride ? textOverride?.admin || {} : {}),
				...(textOverride === false ? { hidden: true } : {}),
			},
		},
	];

	return {
		type: "group",
		interfaceName: "LinkField",
		label: undefined,
		admin: { hideGutter: true, ...(overrides?.admin || {}) },
		fields,
		...overrides,
	} as GroupField;
};
