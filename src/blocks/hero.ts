import type { Block } from "payload";

const HeroBlock: Block = {
  slug: "heroBlock",
  interfaceName: "HeroBlockType",
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "backgroundImage",
          label: "Background Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "frontImage",
          label: "Front Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "backgroundText",
          label: "Background Text",
          type: "text",
          required: true,
        },
        {
          name: "frontText",
          label: "Front Text",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export { HeroBlock };
