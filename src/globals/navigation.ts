import type { GlobalConfig } from "payload";

const Navigation: GlobalConfig = {
  slug: "navigation",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "navigation",
          label: "Primary Navigation",
          fields: [
            {
              name: "links",
              label: "Links",
              type: "array",
              localized: true,
              fields: [
                {
                  name: "overrideLabel",
                  label: "Override label?",
                  type: "checkbox",
                  defaultValue: false,
                },
                {
                  name: "label",
                  label: "Text",
                  type: "text",
                  admin: {
                    condition: (_, siblingData) => siblingData.overrideLabel,
                  },
                },
                {
                  name: "link",
                  type: "relationship",
                  relationTo: ["pages"],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { Navigation };
