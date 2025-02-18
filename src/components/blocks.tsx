import type {
  AboutSectionType,
  BigListBlockType,
  HeroBlockType,
  RichTextType,
  TitleWithBlocksType,
} from "@/payload-types";
import type { ComponentType } from "react";
import { About } from "./about";
import { BigList } from "./bigList";
import { Hero } from "./hero";
import { RichText } from "./richtext";
import { TitleWithBlocks } from "./titleWithBlocks";

interface BlocksProps {
  blocks:
    | (
        | HeroBlockType
        | AboutSectionType
        | RichTextType
        | TitleWithBlocksType
        | BigListBlockType
      )[]
    | null
    | undefined;
}

const blockComponents = {
  heroBlock: Hero,
  AboutSection: About,
  RichText: RichText,
  TitleWithBlocks: TitleWithBlocks,
  BigListBlock: BigList,
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
