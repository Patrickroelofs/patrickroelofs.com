import { type ReactElement } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon/icon';
import { type SiteSetting } from '../../../payload-types';

export function Footer({
  socialMediaLinks,
}: Pick<SiteSetting, 'socialMediaLinks'>): ReactElement {
  return (
    <footer className="sticky bottom-0 flex h-[600px] items-center justify-center bg-gradient-to-b from-black to-black-lightened py-lg text-white">
      <div className="mx-auto w-full max-w-screen-2xl">
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
      </div>
    </footer>
  );
}
