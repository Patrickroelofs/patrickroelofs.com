import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

import imageUrlBuilder from '@sanity/image-url';

import type { Asset } from './types';

import { sanityClient } from './sanity';

const builder = imageUrlBuilder(sanityClient());

export const urlFor = (source: Asset): ImageUrlBuilder => builder.image(source);
