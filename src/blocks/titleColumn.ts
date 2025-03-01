import type { Block } from "payload";
import { FeaturesGridBlock } from "./featuresGrid";
import { RichTextBlock } from "./richText";

export const TitleColumnBlock: Block = {
  slug: "TitleColumn",
  interfaceName: "TitleColumnType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
            },
            {
              name: "button",
              type: "relationship",
              relationTo: "pages",
              required: false,
            },
            {
              name: "blocks",
              type: "blocks",
              blocks: [RichTextBlock, FeaturesGridBlock],
            },
          ],
        },
        {
          name: "settings",
          fields: [
            {
              name: "theme",
              type: "select",
              defaultValue: "light",
              required: true,
              options: [
                {
                  label: "Light",
                  value: "light",
                },
                {
                  label: "Dark",
                  value: "dark",
                },
              ],
            },
            {
              name: "type",
              type: "select",
              defaultValue: "row",
              required: true,
              options: [
                {
                  label: "Row",
                  value: "row",
                },
                {
                  label: "Column",
                  value: "column",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
