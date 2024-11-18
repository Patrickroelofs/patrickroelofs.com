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
    <footer>
      <div className="mx-auto mt-3xl w-full max-w-screen-xl py-lg">
        <div className="mb-md">
          <Link
            href="mailto:contact@patrickroelofs.com"
            className="text-2xl font-medium hover:underline"
          >
            Contact@patrickroelofs.com
          </Link>
        </div>

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
      </div>
    </footer>
  );
}
