import { type ReactElement } from 'react';
import Image from 'next/image';
import heroImage from '@/images/hero.jpg';

export function Hero(): ReactElement {
  return (
    <header className="mx-auto max-w-screen-2xl">
      <div className="flex justify-center align-center px-xs">
        <Image src={heroImage} alt="" className="w-full mx-auto rounded-3xl" />
      </div>
    </header>
  );
}
