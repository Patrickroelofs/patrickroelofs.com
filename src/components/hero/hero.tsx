import { type ReactElement } from 'react';
import Image from 'next/image';
import type { Page, Media } from '../../../payload-types';

type HeroProps = Extract<Page['blocks'][0], { blockType: 'hero' }>;

export function Hero(props: HeroProps): ReactElement {
  const { image, text } = props as { image: Media | null; text: string | null };

  return (
    <header className="mx-auto max-w-(--breakpoint-2xl)">
      <div className="align-center flex justify-center">
        {image !== null ? (
          <Image
            width={1440}
            height={960}
            src={image.url ?? ''}
            alt={image.alt ?? ''}
            className="mx-auto w-full rounded-3xl"
          />
        ) : (
          <Image
            width={1440}
            height={960}
            src="https://placehold.co/1440x960/png"
            alt=""
          />
        )}
      </div>
      <div className="pt-fluid-sm mx-auto max-w-(--breakpoint-xl)">
        <p className="text-fluid-2xl font-medium tracking-tight text-pretty">
          {text
            ? text
            : 'No text has been provided, so here is a sample of what it would look like.'}
        </p>
      </div>
    </header>
  );
}
