'use client';

import React, { type ReactElement } from 'react';
import { useLivePreview } from '@payloadcms/live-preview-react';
import { Blocks } from '@/components/Blocks/blocks';
import { type Page } from '../../../../../payload-types';

function PageClient({ page }: { page: Page }): ReactElement {
  const { data } = useLivePreview<Page>({
    initialData: page,
    serverURL:
      process.env.VERCEL_ENV === 'production'
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ''}`
        : (process.env.NEXT_PUBLIC_SERVER_URL ?? ''),
  });

  /* eslint-disable no-console -- testing purposes */
  console.log(
    process.env.VERCEL_ENV === 'production'
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ''}`
      : (process.env.NEXT_PUBLIC_SERVER_URL ?? ''),
  );

  const { blocks } = data;

  return <Blocks blocks={blocks} />;
}

export { PageClient };
