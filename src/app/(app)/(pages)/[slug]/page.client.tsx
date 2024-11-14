import React, { type ReactElement } from 'react';
import { Blocks } from '@/components/Blocks/blocks';
import { type Page } from '../../../../../payload-types';

function PageClient({ page }: { page: Page }): ReactElement {
  const { blocks } = page;

  return <Blocks blocks={blocks} />;
}

export { PageClient };
