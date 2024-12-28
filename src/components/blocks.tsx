import { type ComponentType, type ReactElement } from 'react';
import { type ColumnsType } from '@/payload-types';

interface BlocksProps {
  blocks: ColumnsType[] | null | undefined;
}

const blockComponents = {};

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
