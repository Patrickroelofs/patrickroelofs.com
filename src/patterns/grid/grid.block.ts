import type { Block } from "payload";
import { FeatureCardBlock } from "../feature-card/feature-card.block";

const GridBlock: Block = {
  slug: "grid",
  interfaceName: "GridType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "content",
              label: "Content",
              type: "blocks",
              blocks: [FeatureCardBlock],
            },
          ],
        },
        {
          name: "settings",
          label: "Settings",
          fields: [
            {
              name: "columns",
              label: "Columns",
              type: "select",
              defaultValue: "3",
              required: true,
              admin: {
                description:
                  "The number of columns to display the content in, on tablet two columns, on mobile 1.",
              },
              options: [
                {
                  label: "3 Columns",
                  value: "3",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { GridBlock };
