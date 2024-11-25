import { type ReactElement } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/icon/icon';
import { payload } from '@/utils/get-payload-instance';

export async function Footer(): Promise<ReactElement> {
  const { socialMediaLinks } = await payload.findGlobal({
    slug: 'site-settings',
    select: {
      socialMediaLinks: true,
    },
  });

  return (
    <footer className="px-fluid-sm">
      <div className="mt-fluid-3xl pt-fluid-lg mx-auto w-full max-w-7xl">
        <div className="mb-fluid-md">
          <Link
            href="mailto:contact@patrickroelofs.com"
            className="text-fluid-lg md:text-fluid-2xl font-medium hover:underline"
          >
            Contact@patrickroelofs.com
          </Link>
        </div>

        <ul className="text-fluid-xl gap-fluid-lg flex">
          {socialMediaLinks?.map((link) => (
            <li key={link.platform}>
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                aria-label={`external link to ${link.platform}`}
                className="gap-fluid-2xs flex items-center hover:underline focus:underline"
              >
                <Icon iconType={link.icon} />
                <span className="text-base">{link.platform}</span>
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="text-fluid-8xl h-64 overflow-clip text-center font-bold">
          Thanks
        </h2>
      </div>
    </footer>
  );
}
