import { type ReactElement } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/Icon/icon';
import { payload } from '@/utils/get-payload-instance';

export async function Footer(): Promise<ReactElement> {
  const { socialMediaLinks } = await payload.findGlobal({
    slug: 'site-settings',
    select: {
      socialMediaLinks: true,
    },
  });

  return (
    <footer className="mx-auto mb-md mt-3xl w-full max-w-screen-xl py-lg">
      <ul className="flex gap-lg text-xl">
        {socialMediaLinks?.map((link) => (
          <li key={link.platform}>
            <Link
              key={link.url}
              href={link.url}
              target="_blank"
              aria-label={`external link to ${link.platform}`}
              className="flex items-center gap-2xs hover:underline focus:underline"
            >
              <Icon iconType={link.icon} />
              <span className="text-base">{link.platform}</span>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
