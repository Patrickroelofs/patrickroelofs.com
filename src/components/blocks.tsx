import type {
  HeroBlockType,
  RichTextType,
  TitleColumnType,
} from "@/payload-types";
import type { ComponentType } from "react";
import { Hero } from "./hero";
import { RichText } from "./richtext";
import { TitleColumn } from "./titleColumn";

interface BlocksProps {
  blocks: (HeroBlockType | RichTextType | TitleColumnType)[] | null | undefined;
}

const blockComponents = {
  heroBlock: Hero,
  RichText: RichText,
  TitleColumn: TitleColumn,
};

function Blocks({ blocks }: BlocksProps) {
  if (blocks === null || blocks === undefined) {
    return null;
  }

  return (
    <>
      {blocks.map((block) => {
        const { blockType } = block;

        if (blockType in blockComponents) {
          const BlockComponent = blockComponents[blockType] as ComponentType;

          return <BlockComponent key={block.id} {...block} />;
        }

        return null;
      })}
    </>
  );
}

export { Blocks };
