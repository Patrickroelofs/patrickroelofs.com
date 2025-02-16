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
    {
      localized: true,
      required: true,
      name: "stories",
      label: "Stories",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "story",
          label: "Story",
          type: "text",
          localized: true,
        },
      ],
    },
    {
      localized: true,
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      localized: true,
      name: "description",
      label: "Description",
      type: "textarea",
    },
  ],
};

export { HeroBlock };
