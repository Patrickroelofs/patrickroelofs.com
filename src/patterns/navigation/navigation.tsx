import React, { type ReactElement } from 'react';
import Link, { type LinkProps } from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import squiggly from '@/images/squiggly.svg';
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
    slug: 'site-settings',
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
    <nav className="mx-auto mb-xs mt-xs flex max-w-screen-2xl justify-between px-lg">
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="group relative text-xl font-semibold">
          <h1>
            {title}
            <span className="invisible absolute -bottom-3xs left-0 w-full opacity-0 transition-all duration-150 ease-in-out group-hover:visible group-hover:opacity-100">
              <Image src={squiggly as StaticImageData} alt="" />
            </span>
          </h1>
        </Link>

        <ul className="flex gap-sm">
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
