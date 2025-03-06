import type { Block } from "payload";

const HeroBlock: Block = {
  slug: "heroBlock",
  interfaceName: "HeroBlockType",
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export { HeroBlock };
