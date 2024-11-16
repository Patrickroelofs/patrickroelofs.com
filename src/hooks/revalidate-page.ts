// @ts-expect-error -- not an actual error, just a missing type
import type { AfterChangeHook } from 'payload/dist/collections/config/types';
import { revalidate } from '@/app/actions/actions';

export const revalidatePage: AfterChangeHook = ({
  doc,
}: {
  doc: { slug: string };
  req: { user: { id: string } };
}) => {
  const revalidateAwait = async (): Promise<void> => {
    await revalidate(
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL ?? ''}/${doc.slug === 'home' ? '' : doc.slug}`,
    );
  };

  void revalidateAwait();

  return doc;
};
