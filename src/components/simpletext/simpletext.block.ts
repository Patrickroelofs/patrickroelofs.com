import type { Block } from "payload";

const SimpleTextBlock: Block = {
  slug: "simpleText",
  interfaceName: "SimpleTextType",
  fields: [
    {
      name: "content",
      label: "Content",
      type: "text",
      required: true,
    },
  ],
};

export { SimpleTextBlock };
