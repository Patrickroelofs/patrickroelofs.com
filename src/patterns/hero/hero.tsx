import { type ReactElement } from 'react';
import Image from 'next/image';
import heroImage from '@/images/hero.jpg';

export function Hero(): ReactElement {
  return (
    <header className="mx-auto max-w-screen-2xl">
      <div className="align-center flex justify-center px-xs">
        <Image src={heroImage} alt="" className="mx-auto w-full rounded-3xl" />
      </div>
      <p className="py-lg text-center font-serif text-3xl">
        <span className="font-semibold">Frontend developer</span> with a passion
        for <span className="italic">creating</span>.
      </p>
    </header>
  );
}
