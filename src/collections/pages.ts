import { slugField } from "@/fields/slug";
import { GridBlock } from "@/patterns/grid/grid.block";
import { HeroBlock } from "@/patterns/hero/hero.block";
import { StickyTitleBlock } from "@/patterns/sticky-title/sticky-title.block";
import { revalidateAfterChange } from "@/util/revalidateAfterChange";
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
  slug: "pages",
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
              name: "content",
              label: "Content",
              type: "blocks",
              blocks: [HeroBlock, GridBlock, StickyTitleBlock],
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

export { Pages };
