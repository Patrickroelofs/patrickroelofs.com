import { revalidateTag } from 'next/cache';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/require-await -- required for Next.js API Routes
export async function GET(request: NextRequest): Promise<NextResponse> {
  const collection = request.nextUrl.searchParams.get('collection');
  const slug = request.nextUrl.searchParams.get('slug');
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY) {
    return NextResponse.json({ revalidated: false, now: Date.now() });
  }

  if (typeof collection === 'string' && typeof slug === 'string') {
    revalidateTag(`${collection}_${slug}`);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  }

  return NextResponse.json({ revalidated: false, now: Date.now() });
}
