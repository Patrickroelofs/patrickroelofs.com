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
    imageSizes: [
      {
        name: "xsmall",
        width: 500,
        height: 281,
      },
      {
        name: "small",
        width: 750,
        height: 422,
      },
      {
        name: "medium",
        width: 1024,
        height: 576,
      },
      {
        name: "large",
        width: 1280,
        height: 720,
      },
      {
        name: "xlarge",
        width: 1600,
        height: 900,
      },
      {
        name: "xxlarge",
        width: 1920,
        height: 1080,
      },
    ],
  },
  hooks: {
    beforeValidate: [generateBlurData],
  },
};
