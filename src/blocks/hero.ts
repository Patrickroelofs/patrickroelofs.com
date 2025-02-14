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
          name: "leftText",
          label: "Left Text",
          type: "text",
          required: true,
        },
        {
          name: "rightText",
          label: "Right Text",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export { HeroBlock };
