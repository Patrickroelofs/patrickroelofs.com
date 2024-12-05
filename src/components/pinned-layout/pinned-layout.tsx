import { type ReactElement } from 'react';
import { cva } from 'class-variance-authority';
import { OptionsAsObject, spacingOptions } from '@/utils/spacing-options';
// eslint-disable-next-line import/no-cycle -- TODO: Fix cycle if possible
import { Blocks } from '@/components/blocks/blocks';
import type { Page } from '../../../payload-types';

type PinnedLayoutProps = Extract<
  Page['blocks'][0],
  { blockType: 'pinnedLayout' }
>;

const pinnedLayoutWrapper = cva(
  ['flex mx-auto max-w-(--breakpoint-2xl) w-full gap-fluid-lg'],
  {
    variants: {
      pinTitleTo: {
        left: [''],
        right: ['flex-row-reverse'],
      },
      spacing: OptionsAsObject(spacingOptions, 'my-'),
    },
  },
);

export function PinnedLayout(props: PinnedLayoutProps): ReactElement {
  const { title, pinTitleTo, blocks } = props.content;
  const { spacing } = props.options;

  return (
    <div
      className={pinnedLayoutWrapper({
        pinTitleTo,
        spacing,
      })}
    >
      <div className="w-1/4">
        <h2 className="text-fluid-2xl sticky top-12 font-medium tracking-tight text-pretty">
          {title}
        </h2>
      </div>
      <div className="w-3/4">
        <Blocks blocks={blocks} />
      </div>
    </div>
  );
}
