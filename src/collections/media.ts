import { generateBlurData } from "@/util/generateBlurData";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "blurData",
      type: "text",
      admin: {
        hidden: true,
        disableListColumn: true,
        disableListFilter: true,
      },
    },
  ],
  upload: true,
  hooks: {
    beforeValidate: [generateBlurData],
  },
};
