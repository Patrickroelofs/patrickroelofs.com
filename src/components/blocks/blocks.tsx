import { type ComponentType, type ReactElement } from 'react';
import { Hero } from '@/components/hero/hero';
// eslint-disable-next-line import/no-cycle -- TODO: Fix cycle if possible
import { PinnedLayout } from '@/components/pinned-layout/pinned-layout';
import { RichText } from '@/components/rich-text/rich-test';
import {
  type HeroType,
  type PinnedLayoutType,
  type RichTextType,
} from '../../../payload-types';

interface BlocksProps {
  blocks: (HeroType | PinnedLayoutType | RichTextType)[] | null | undefined;
}

const blockComponents = {
  hero: Hero,
  pinnedLayout: PinnedLayout,
  richText: RichText,
};

function Blocks({ blocks }: BlocksProps): ReactElement | null {
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
