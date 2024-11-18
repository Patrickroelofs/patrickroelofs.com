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
  const draft = await draftMode();
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  draft.enable();
  redirect(url);
}
