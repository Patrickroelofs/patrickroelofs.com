import path from "node:path";
import { fileURLToPath } from "node:url";
import { generateBlurData } from "@/util/generateBlurData";
import type { CollectionConfig } from "payload";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

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
  upload: {
    staticDir:
      process.env.NODE_ENV === "development"
        ? path.resolve(dirname, "../../public/media")
        : undefined,
  },
  hooks: {
    beforeValidate: [generateBlurData],
  },
};
