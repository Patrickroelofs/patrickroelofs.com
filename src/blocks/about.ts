import type { Block } from "payload";

export const AboutSectionBlock: Block = {
  slug: "AboutSection",
  interfaceName: "AboutSectionType",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "About",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      label: "Button",
      type: "collapsible",
      fields: [
        {
          name: "overrideTitle",
          label: "Override Title",
          type: "text",
        },
        {
          name: "link",
          type: "relationship",
          relationTo: "pages",
        },
      ],
    },
  ],
};
