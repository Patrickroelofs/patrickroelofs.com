import type { AboutSectionType, HeroBlockType } from "@/payload-types";
import type { ComponentType } from "react";
import { About } from "./about";
import { Hero } from "./hero/hero";

interface BlocksProps {
  blocks: (HeroBlockType | AboutSectionType)[] | null | undefined;
}

const blockComponents = {
  heroBlock: Hero,
  AboutSection: About,
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
