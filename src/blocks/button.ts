import type { Block } from "payload";

const ButtonBlock: Block = {
  slug: "ButtonBlock",
  interfaceName: "ButtonBlockType",
  fields: [
    {
      name: "overrideButton",
      label: "Override Button Text",
      type: "checkbox",
    },
    {
      name: "buttonText",
      label: "Button Text",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData?.overrideButton,
      },
    },
    {
      name: "theme",
      label: "Theme",
      type: "select",
      defaultValue: "primary",
      options: [
        {
          label: "Primary",
          value: "primary",
        },
        {
          label: "Outline",
          value: "outline",
        },
      ],
    },
    {
      name: "link",
      label: "Link",
      type: "relationship",
      relationTo: "pages",
    },
  ],
};

export { ButtonBlock };
