import { type Metadata } from 'next';
import { type ReactElement } from 'react';
import { getGlobalConfiguration } from '@/utils/get-global-configuration';
import { payload } from '@/utils/get-payload-instance';
import { PageClient } from '@/app/(app)/(pages)/[slug]/page.client';
import { type Page } from '../../../../../payload-types';

async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<ReactElement> {
  const { slug = 'home' } = await params;
  let page: Page | null = null;

  try {
    page = await payload
      .find({
        collection: 'pages',
        where: {
          slug: {
            equals: slug,
          },
        },
        limit: 1,
      })
      .catch(() => {
        return null;
      })
      .then((result) => {
        if (!result?.docs || result.docs.length === 0) {
          return null;
        }

        return result.docs.at(0) ?? null;
      });

    // TODO: Handle 404
    if (!page) return <p>404</p>;

    return <PageClient page={page} />;
  } catch (error) {
    return <p>Something went wrong...</p>;
  }
}

export async function generateStaticParams(): Promise<unknown> {
  try {
    const pages = await payload
      .find({
        collection: 'pages',
      })
      .catch(() => {
        return null;
      })
      .then((result) => {
        if (!result?.docs || result.docs.length === 0) {
          return null;
        }

        return result.docs;
      });

    if (!pages)
      return {
        paths: [],
      };

    return pages.map((page) => ({
      params: {
        slug: page.slug,
      },
    }));
  } catch (error) {
    return {
      paths: [],
    };
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const globals = await getGlobalConfiguration();

  return {
    ...globals,
  };
}

export default Page;
