import { FeatureCard } from "@/patterns/feature-card/feature-card";
import { Grid } from "@/patterns/grid/grid";
import { Hero } from "@/patterns/hero/hero";
import { StickyTitle } from "@/patterns/sticky-title/sticky-title";
import type {
  FeatureCardType,
  GridType,
  HeroType,
  RichTextType,
  StickyTitleType,
} from "@/payload-types";
import type { ComponentType } from "react";
import { RichText } from "./richtext/richtext";

interface BlocksProps {
  blocks:
    | (GridType | HeroType | FeatureCardType | StickyTitleType | RichTextType)[]
    | null
    | undefined;
}

const components = {
  hero: Hero,
  grid: Grid,
  "feature-card": FeatureCard,
  "sticky-title": StickyTitle,
  "rich-text": RichText,
};

function Blocks({ blocks }: BlocksProps) {
  if (blocks === null || blocks === undefined) {
    return null;
  }

  return (
    <>
      {blocks.map((block) => {
        const { blockType } = block;

        if (blockType in components) {
          const BlockComponent = components[blockType] as ComponentType;

          return <BlockComponent key={block.id} {...block} />;
        }

        return null;
      })}
    </>
  );
}

export { Blocks };
