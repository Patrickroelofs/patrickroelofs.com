import { RichTextBlock } from "@/components/richtext/richtext.block";
import type { Block } from "payload";
import { GridBlock } from "../grid/grid.block";

const StickyTitleBlock: Block = {
  slug: "sticky-title",
  interfaceName: "StickyTitleType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            {
              name: "title",
              type: "text",
              label: "Title",
              required: true,
            },
            {
              name: "blocks",
              type: "blocks",
              blocks: [GridBlock, RichTextBlock],
            },
          ],
        },
      ],
    },
  ],
};

export { StickyTitleBlock };
