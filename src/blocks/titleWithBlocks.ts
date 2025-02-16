import type { Block } from "payload";
import { RichTextBlock } from "./richText";

export const TitleWithBlocksBlock: Block = {
  slug: "TitleWithBlocks",
  interfaceName: "TitleWithBlocksType",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "blocks",
      label: "Blocks",
      type: "blocks",
      required: true,
      blocks: [RichTextBlock],
    },
  ],
};
