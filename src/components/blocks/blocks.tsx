import { type ComponentType, type ReactElement } from 'react';
import { Hero } from '@/components/hero/hero';
// eslint-disable-next-line import/no-cycle -- Required for this type of component
import { Columns } from '@/components/columns/columns';
import { SimpleText } from '@/components/simpleText/simple-text';
import { type Page } from '../../../payload-types';

interface BlocksProps {
  blocks: Page['blocks'][0][];
}

const blockComponents = {
  hero: Hero,
  customColumns: Columns,
  simpleText: SimpleText,
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
