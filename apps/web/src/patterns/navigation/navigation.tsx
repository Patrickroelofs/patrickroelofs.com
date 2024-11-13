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

export function Navigation(): ReactElement {
  return (
    <nav className="px-md flex max-w-screen-2xl mx-auto justify-between mt-xs mb-xs">
      <div className="flex justify-between items-center w-full">
        <Link
          href="/"
          className="font-serif font-semibold text-xl relative group"
        >
          <h1>
            Patrick Roelofs
            <span className="absolute -bottom-3xs w-full left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-150">
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
