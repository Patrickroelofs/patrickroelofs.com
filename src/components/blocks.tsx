import { Hero } from "@/patterns/hero/hero";
import type { HeroType } from "@/payload-types";
import type { ComponentType } from "react";

interface BlocksProps {
  blocks: HeroType[] | null | undefined;
}

const headerComponents = {
  hero: Hero,
};

const mainComponents = {};

function Blocks({ blocks }: BlocksProps) {
  if (blocks === null || blocks === undefined) {
    return null;
  }

  return (
    <>
      {blocks.map((block) => {
        const { blockType } = block;

        if (blockType in headerComponents) {
          const BlockComponent = headerComponents[blockType] as ComponentType;

          return <BlockComponent key={block.id} {...block} />;
        }

        return null;
      })}

      <main>
        {blocks.map((block) => {
          const { blockType } = block;

          if (blockType in mainComponents) {
            const BlockComponent = mainComponents[blockType] as ComponentType;

            return <BlockComponent key={block.id} {...block} />;
          }

          return null;
        })}
      </main>
    </>
  );
}

export { Blocks };
