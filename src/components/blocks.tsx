import type {
  BlogListType,
  ButtonBlockType,
  FeaturesGridType,
  HeroBlockType,
  RichTextType,
  TitleColumnType,
} from "@/payload-types";
import type { ComponentType } from "react";
import { BlogList } from "./blogList";
import { Button } from "./button";
import { FeaturesGrid } from "./featuresGrid";
import { Hero } from "./hero";
import { RichText } from "./richtext";
import { TitleColumn } from "./titleColumn";

interface BlocksProps {
  blocks:
    | (
        | HeroBlockType
        | RichTextType
        | TitleColumnType
        | FeaturesGridType
        | ButtonBlockType
        | BlogListType
      )[]
    | null
    | undefined;
}

const blockComponents = {
  heroBlock: Hero,
  RichText: RichText,
  TitleColumn: TitleColumn,
  FeaturesGrid: FeaturesGrid,
  ButtonBlock: Button,
  BlogList: BlogList,
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
