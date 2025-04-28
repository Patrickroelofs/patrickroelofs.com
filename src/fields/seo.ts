import {
	MetaDescriptionField,
	MetaImageField,
	MetaTitleField,
	OverviewField,
	PreviewField,
} from "@payloadcms/plugin-seo/fields";

const seoFields = {
	name: "seo",
	label: "SEO",
	fields: [
		MetaTitleField({
			hasGenerateFn: false,
		}),
		MetaDescriptionField({
			hasGenerateFn: false,
		}),
		MetaImageField({
			relationTo: "media",
		}),
		PreviewField({
			hasGenerateFn: true,
		}),
		OverviewField({
			titlePath: "meta.title",
			descriptionPath: "meta.description",
			imagePath: "meta.image",
		}),
	],
};

export { seoFields };
