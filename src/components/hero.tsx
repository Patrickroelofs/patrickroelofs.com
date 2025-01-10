import { type ReactElement } from 'react';
import Image from 'next/image';
import { type HeroType, type Media } from '@/payload-types';

function Hero(props: HeroType): ReactElement {
  const { background } = props as {
    background: Media;
  };

  return (
    <div className="container pt-12">
      <Image
        src={background.url ?? ''}
        width={1600}
        height={760}
        alt={background.alt}
        className="object-cover rounded-3xl h-[760px]"
      />
      <p className="text-5xl leading-snug font-bold text-pretty pt-12 py-6 max-w-screen-xl mx-auto">
        {props.description}
      </p>
    </div>
  );
}

export { Hero };
