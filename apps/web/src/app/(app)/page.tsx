import React, { type ReactElement } from 'react';
import { Hero } from '@/patterns/hero/hero';
import { Navigation } from '@/patterns/navigation/navigation';
import { payload } from '@/utils/get-payload-instance';
import { type SiteSetting } from '../../../payload-types';

async function Home(): Promise<ReactElement> {
  const globals: SiteSetting = await payload.findGlobal({
    slug: 'site-settings',
  });

  return (
    <>
      <title>{globals.siteTitle}</title>
      <Navigation title={globals.siteTitle} />
      <Hero />
    </>
  );
}

export default Home;
