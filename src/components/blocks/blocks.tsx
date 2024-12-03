import { type ComponentType, type ReactElement } from 'react';
import { Hero } from '@/components/hero/hero';
import { PinnedLayout } from '@/components/pinned-layout/pinned-layout';
import { type Page } from '../../../payload-types';

interface BlocksProps {
  blocks: Page['blocks'][0][];
}

const blockComponents = {
  hero: Hero,
  pinnedLayout: PinnedLayout,
};

function Blocks({ blocks }: BlocksProps): ReactElement {
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
