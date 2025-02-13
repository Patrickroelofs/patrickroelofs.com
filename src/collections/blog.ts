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
