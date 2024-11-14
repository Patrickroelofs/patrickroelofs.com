import { type ReactElement } from 'react';
import { Hero } from '@/patterns/hero/hero';
import { Paragraph } from '@/components/Paragraph/paragraph';
import { type Page } from '../../../payload-types';

interface BlocksProps {
  blocks: Page['blocks'][0][];
}

const blockComponents = {
  hero: Hero,
  paragraph: Paragraph,
};

function Blocks({ blocks }: BlocksProps): ReactElement {
  return (
    <>
      {blocks.map((block) => {
        const { blockType } = block;

        if (blockType in blockComponents) {
          const BlockComponent = blockComponents[blockType];

          // @ts-expect-error: BlockComponent type is not correctly inferred
          return <BlockComponent key={block.id} {...block} />;
        }

        return null;
      })}
    </>
  );
}

export { Blocks };
