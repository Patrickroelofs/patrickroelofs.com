import React, { type ReactElement } from 'react';
import Link from 'next/link';
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr';

function Footer(): ReactElement {
  return (
    <footer>
      <div className="container mt-12">
        <hr className="border-[1px] border-black" />
        <div className="grid grid-cols-2 mt-12 mb-36">
          <div className="text-2xl leading-10">
            Located in the Netherlands, Nijmegen. <br />
            Thanks for visiting!
          </div>
          <div className="flex justify-end">
            <ul className="flex gap-6 flex-row">
              <li>
                <Link href="#" className="text-6xl">
                  <GithubLogo weight="duotone" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-6xl">
                  <LinkedinLogo weight="duotone" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link
          href="mailto:contact@patrickroelofs.com"
          className="text-8xl font-black hover:underline overflow-clip h-[74px] block text-center"
        >
          Contact@patrickroelofs.com
        </Link>
      </div>
    </footer>
  );
}

export { Footer };
