import { type ReactElement } from 'react';
import { Hero } from '@/components/hero/hero';
import { Paragraph } from '@/components/paragraph/paragraph';
import { Section } from '@/components/section/section';
import { LargeMovableTitle } from '@/components/largeMovableTitle/large-movable-title';
import { type Page } from '../../../payload-types';

interface BlocksProps {
  blocks: Page['blocks'][0][];
}

const blockComponents = {
  hero: Hero,
  paragraph: Paragraph,
  'large-movable-title': LargeMovableTitle,
};

function Blocks({ blocks }: BlocksProps): ReactElement {
  return (
    <>
      {blocks.map((block) => {
        const { blockType } = block;

        if (blockType in blockComponents) {
          const BlockComponent = blockComponents[blockType];

          return (
            <Section key={block.id}>
              {/* @ts-expect-error - This is a dynamic component */}
              <BlockComponent {...block} />
            </Section>
          );
        }

        return null;
      })}
    </>
  );
}

export { Blocks };
