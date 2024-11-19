import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string;
      };
    };
  },
): Promise<Response> {
  const token = req.cookies.get('payload-token').value;
  const draft = await draftMode();
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('Missing url parameter', {
      status: 404,
    });
  }

  if (!token) {
    draft.disable();
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  const userReq: Response = await fetch(
    `${process.env.NEXT_PUBLIC_URL ?? ''}/api/users/me`,
    {
      headers: {
        method: 'GET',
        credentials: 'include',
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`,
      },
    },
  );

  const userRes: unknown = await userReq.json();

  // @ts-expect-error -- TODO: Figure this type out
  if (!userReq.ok || !userRes.user) {
    draft.disable();
    return new Response('You are not allowed to preview this page', {
      status: 403,
    });
  }

  draft.enable();
  redirect(url);
}
