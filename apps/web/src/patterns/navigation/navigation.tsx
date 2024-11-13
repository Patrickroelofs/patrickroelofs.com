import { type ReactElement } from 'react';
import Link from 'next/link';

export function Navigation(): ReactElement {
  return (
    <nav className="flex justify-between sticky top-0 mt-4 mb-4 pt-4 pb-4">
      <div className="max-w-screen-2xl mx-auto w-full px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-serif font-semibold text-4xl">
            <h1>Patrick Roelofs</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
