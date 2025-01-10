import { type ComponentType, type ReactElement } from 'react';
import {
  type ColumnsType,
  type HeroType,
  type RichTextType,
} from '@/payload-types';
import { Columns } from '@/components/columns';
import { RichText } from '@/components/richtext';
import { Hero } from '@/components/hero';

interface BlocksProps {
  blocks: (ColumnsType | RichTextType | HeroType)[] | null | undefined;
}

const blockComponents = {
  Columns,
  RichText,
  Hero,
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
