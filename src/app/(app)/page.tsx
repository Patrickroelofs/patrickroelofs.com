import React, { type ReactElement } from 'react';
import type { Metadata } from 'next'
import { Hero } from '@/patterns/hero/hero';
import { Navigation } from '@/patterns/navigation/navigation';
import { payload } from '@/utils/get-payload-instance';
import { getGlobalConfiguration } from '@/utils/get-global-configuration';
import { type SiteSetting } from '../../../payload-types';


export async function generateMetadata(): Promise<Metadata> {
  const globals =  await getGlobalConfiguration();

  return {
    ...globals
  }
}

async function Home(): Promise<ReactElement> {
  const globals: SiteSetting = await payload.findGlobal({
    slug: 'site-settings',
  });

  return (
    <>
      <Navigation title={globals.siteTitle} />
      <Hero />
    </>
  );
}

export default Home;
