import { type ReactElement } from 'react';
import Image from 'next/image';
import { Warning } from '@/components/warning/warning';
import type { Page, Media } from '../../../payload-types';

type HeroProps = Extract<Page['blocks'][0], { blockType: 'hero' }>;

export function Hero(props: HeroProps): ReactElement {
  const { image, text } = props as { image: Media | null; text: string | null };

  return (
    <header className="mx-auto max-w-screen-2xl">
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
          <Warning message="No image provided" />
        )}
      </div>
      <div className="mx-auto max-w-screen-xl pt-sm">
        {text !== null ? (
          <p className="text-pretty text-2xl font-medium tracking-tight">
            {text}
          </p>
        ) : (
          <Warning message="No text provided" />
        )}
      </div>
    </header>
  );
}
