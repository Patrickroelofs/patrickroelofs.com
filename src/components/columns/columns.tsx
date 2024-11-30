import { type ReactElement } from 'react';
import { cva } from 'class-variance-authority';
// eslint-disable-next-line import/no-cycle -- Allowed for this type of component
import { Blocks } from '@/components/blocks/blocks';
import type { Page } from '../../../payload-types';

type ColumnsProps = Extract<Page['blocks'][0], { blockType: 'customColumns' }>;

const columnsStyles = cva([
  'mx-auto flex grid max-w-(--breakpoint-2xl) grid-cols-6',
]);

const columnStyles = cva([''], {
  variants: {
    intent: {
      '25': 'col-span-1',
      '33': 'col-span-2',
      '50': 'col-span-3',
      '66': 'col-span-4',
      '75': 'col-span-5',
      '100': 'col-span-6',
    },
  },
});

export function Columns(props: ColumnsProps): ReactElement | null {
  const { columns } = props;

  if (!columns) return null;

  return (
    <div className={columnsStyles()}>
      {columns.map((column) => {
        return (
          <div
            key={column.id}
            className={columnStyles({
              intent: column.width,
            })}
          >
            {/* @ts-expect-error -- TODO: Figure out a fix for this type */}
            <Blocks blocks={column.blocks} />
          </div>
        );
      })}
    </div>
  );
}
