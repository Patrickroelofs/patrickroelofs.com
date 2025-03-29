import { FeatureCard } from "@/patterns/feature-card/feature-card";
import { Grid } from "@/patterns/grid/grid";
import { Hero } from "@/patterns/hero/hero";
import type { FeatureCardType, GridType, HeroType } from "@/payload-types";
import type { ComponentType } from "react";

interface BlocksProps {
  blocks: (GridType | HeroType | FeatureCardType)[] | null | undefined;
}

const components = {
  hero: Hero,
  grid: Grid,
  "feature-card": FeatureCard,
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
