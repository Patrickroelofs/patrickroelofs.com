import { Grid } from "@/patterns/grid/grid";
import { Hero } from "@/patterns/hero/hero";
import type { GridType, HeroType, SimpleTextType } from "@/payload-types";
import type { ComponentType } from "react";
import { SimpleText } from "./simpletext/simpletext";

interface BlocksProps {
  blocks: (GridType | HeroType | SimpleTextType)[] | null | undefined;
}

const components = {
  hero: Hero,
  grid: Grid,
  simpleText: SimpleText,
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
