import type { Block } from "payload";

const RichTextBlock: Block = {
  slug: "rich-text",
  interfaceName: "RichTextType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              label: "Rich Text",
              name: "richText",
              type: "richText",
            },
          ],
        },
      ],
    },
  ],
};

export { RichTextBlock };
