import type { HeroBlockType } from "@/payload-types";
import type { ComponentType } from "react";
import { Hero } from "./hero";

interface BlocksProps {
  blocks: HeroBlockType[] | null | undefined;
}

const blockComponents = {
  heroBlock: Hero,
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
