import type { Metadata } from 'next';
import { payload } from '@/utils/get-payload-instance';

export async function getGlobalConfiguration(): Promise<Metadata> {
  const globals = await payload.findGlobal({
    slug: 'site-settings',
  });

  return {
    title: globals.siteTitle,
    description: globals.siteDescription,
  }
}