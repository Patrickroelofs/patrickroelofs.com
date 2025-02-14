import { HeroBlock } from "@/blocks/hero";
import { slugField } from "@/fields/slug";
import { revalidateAfterChange } from "@/util/revalidateAfterChange";
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
      localized: true,
    },
    slugField({
      trackingField: "title",
    }),
    {
      name: "content",
      label: "Content",
      type: "blocks",
      blocks: [HeroBlock],
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
