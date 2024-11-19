'use client';

import React, { type ReactElement } from 'react';
import { useLivePreview } from '@payloadcms/live-preview-react';
import { Blocks } from '@/components/blocks/blocks';
import { type Page } from '../../../../../payload-types';

function PageClient({ page }: { page: Page }): ReactElement {
  const { data } = useLivePreview<Page>({
    initialData: page,
    serverURL:
      process.env.VERCEL_ENV === 'production'
        ? `https://${process.env.NEXT_PUBLIC_URL ?? ''}`
        : (process.env.NEXT_PUBLIC_URL ?? ''),
  });

  const { blocks } = data;

  return <Blocks blocks={blocks} />;
}

export { PageClient };
