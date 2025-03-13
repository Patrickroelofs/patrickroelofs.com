import { CodeBlock } from "@/blocks/code";
import { RichTextBlock } from "@/blocks/richText";
import { slugField } from "@/fields/slug";
import { revalidateAfterChange } from "@/util/revalidateAfterChange";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

const Blog: CollectionConfig = {
  slug: "blog",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Collection",
          fields: [
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
              localized: true,
            },
            slugField({
              trackingField: "title",
            }),
            {
              name: "description",
              label: "Description",
              type: "textarea",
              required: true,
              localized: true,
            },
            {
              name: "coverImage",
              label: "Cover Image",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              type: "tabs",
              tabs: [
                {
                  name: "content",
                  label: "Content",
                  fields: [
                    {
                      name: "blocks",
                      label: "Blocks",
                      type: "blocks",
                      required: true,
                      localized: true,
                      blocks: [RichTextBlock, CodeBlock],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "meta",
          label: "Metadata",
          fields: [
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaDescriptionField({
              hasGenerateFn: true,
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
        },
      ],
    },
  ],
  versions: {
    maxPerDoc: 15,
    drafts: {
      schedulePublish: true,
      autosave: true,
    },
  },
  hooks: {
    afterChange: [revalidateAfterChange],
  },
};

export { Blog };
