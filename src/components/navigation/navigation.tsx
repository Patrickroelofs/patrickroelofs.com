import React, { type ReactElement } from 'react';
import Link, { type LinkProps } from 'next/link';
import { payload } from '@/utils/get-payload-instance';
import { type Page } from '../../../payload-types';

function NavigationLink({
  children,
  ...props
}: LinkProps & { children: React.ReactNode }): ReactElement {
  return (
    <li className="text-base">
      <Link {...props}>{children}</Link>
    </li>
  );
}

interface NavigationProps {
  title: string;
}

export async function Navigation({
  title,
}: NavigationProps): Promise<ReactElement> {
  const navigation = await payload.findGlobal({
    slug: 'navigation',
    select: {
      navigationLinks: true,
    },
    populate: {
      pages: {
        title: true,
        slug: true,
      },
    },
  });

  return (
    <nav className="mb-fluid-xs mt-fluid-xs px-fluid-lg mx-auto flex max-w-(--breakpoint-2xl) justify-between">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="text-fluid-xl group relative font-semibold">
          <h1>{title}</h1>
        </Link>

        <ul className="gap-fluid-sm flex">
          {navigation.navigationLinks?.map((item) => {
            const { page } = item as {
              page: Page;
            };

            return (
              <NavigationLink
                key={item.id}
                href={`/${page.slug === 'home' ? '' : page.slug}`}
              >
                {page.title}
              </NavigationLink>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
