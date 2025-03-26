import { Hero } from "@/patterns/hero/hero";
import type { HeroType } from "@/payload-types";
import type { ComponentType } from "react";

interface BlocksProps {
  blocks: HeroType[] | null | undefined;
}

const blockComponents = {
  hero: Hero,
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
