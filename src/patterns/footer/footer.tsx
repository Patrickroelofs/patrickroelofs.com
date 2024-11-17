import { type ReactElement } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon/icon';
import { type SiteSetting } from '../../../payload-types';

export function Footer({
  socialMediaLinks,
}: Pick<SiteSetting, 'socialMediaLinks'>): ReactElement {
  return (
    <footer className="mx-auto w-full max-w-screen-2xl py-lg">
      <ul className="flex gap-md text-xl">
        {socialMediaLinks?.map((link) => (
          <li key={link.platform}>
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              aria-label={`external link to ${link.platform}`}
            >
              <Icon type={link.icon} />
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
