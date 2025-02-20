import type { Block } from "payload";

export const BigListBlock: Block = {
  slug: "BigListBlock",
  interfaceName: "BigListBlockType",
  fields: [
    {
      name: "items",
      label: "Items",
      type: "array",
      minRows: 1,
      maxRows: 0,
      required: true,
      fields: [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
        },
        {
          name: "link",
          label: "Link",
          type: "relationship",
          relationTo: "pages",
          required: true,
        },
      ],
    },
  ],
};
