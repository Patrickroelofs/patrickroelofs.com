import type { Block } from "payload";
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
              name: "blocks",
              type: "blocks",
              blocks: [RichTextBlock],
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
          ],
        },
      ],
    },
  ],
};
