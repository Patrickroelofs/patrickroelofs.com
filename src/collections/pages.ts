import { slugField } from "@/fields/slug";
import type { CollectionConfig } from "payload";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
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
};

export { Pages };
