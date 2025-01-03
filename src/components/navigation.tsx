import React, { type ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import patrick from '../images/patrick.png';

function Navigation(): ReactElement {
  return (
    <nav className="mt-6 w-full sticky top-2">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={patrick.src}
            alt=""
            width={78}
            height={78}
            className="rounded-full"
          />
          <Link href="#" className="text-4xl font-semibold">
            Patrick Roelofs
          </Link>
        </div>
      </div>
    </nav>
  );
}

export { Navigation };
