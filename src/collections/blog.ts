import { slugField } from "@/fields/slug";
import { revalidateAfterChange } from "@/util/revalidateAfterChange";
import type { CollectionConfig } from "payload";

const Blog: CollectionConfig = {
  slug: "blog",
  admin: {
    useAsTitle: "title",
  },
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
              name: "content",
              label: "Content",
              type: "richText",
              required: true,
              localized: true,
            },
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
