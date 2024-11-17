import { type ReactElement } from 'react';
import Image from 'next/image';
import type { Page, Media } from '../../../payload-types';

type HeroProps = Extract<Page['blocks'][0], { blockType: 'hero' }>;

export function Hero(props: HeroProps): ReactElement {
  const { image } = props as { image: Media };

  return (
    <header className="mx-auto max-w-screen-2xl">
      <div className="align-center flex justify-center px-xs">
        {image.url ? (
          <Image
            width={1440}
            height={960}
            src={image.url ?? ''}
            alt=""
            className="mx-auto w-full rounded-3xl"
          />
        ) : (
          <p>No image selected</p>
        )}
      </div>
      <p className="py-lg text-center font-serif text-3xl">
        <span className="font-semibold">Frontend developer</span> with a passion
        for <span className="italic">creating</span>.
      </p>
    </header>
  );
}
