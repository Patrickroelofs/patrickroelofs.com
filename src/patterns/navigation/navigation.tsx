import React, { type ReactElement } from 'react';
import Link, { type LinkProps } from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import squiggly from '@/icons/squiggly.svg';

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

export function Navigation({ title }: NavigationProps): ReactElement {
  return (
    <nav className="mx-auto mb-xs mt-xs flex max-w-screen-2xl justify-between px-md">
      <div className="flex w-full items-center justify-between">
        <Link
          href="/public"
          className="group relative font-serif text-xl font-semibold"
        >
          <h1>
            {title}
            <span className="invisible absolute -bottom-3xs left-0 w-full opacity-0 transition-all duration-150 ease-in-out group-hover:visible group-hover:opacity-100">
              <Image src={squiggly as StaticImageData} alt="" />
            </span>
          </h1>
        </Link>

        <ul className="flex gap-sm">
          <NavigationLink href="#">Projects</NavigationLink>
          <NavigationLink href="#">Blog</NavigationLink>
          <NavigationLink href="#">Photography</NavigationLink>
          <NavigationLink href="#">Contact</NavigationLink>
        </ul>
      </div>
    </nav>
  );
}
