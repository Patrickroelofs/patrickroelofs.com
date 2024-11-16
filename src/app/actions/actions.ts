'use server';

import { revalidateTag } from 'next/cache';

// eslint-disable-next-line @typescript-eslint/require-await -- required for revalidation
async function revalidate(url: string) {
  revalidateTag(url);
}

export { revalidate };
