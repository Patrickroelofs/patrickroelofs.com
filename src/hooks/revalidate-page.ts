// @ts-expect-error can be safely ignored as this file is not compiled
import type { AfterChangeHook } from 'payload/dist/collections/config/types';

// ensure that the home page is revalidated at '/' instead of '/home'
export const formatAppURL = (doc: RevalidatePageProps['doc']): string => {
  const pathToUse = doc.slug === 'home' ? '' : doc.slug;
  const { pathname } = new URL(
    `${process.env.PAYLOAD_PUBLIC_SERVER_URL ?? ''}/${pathToUse}`,
  );
  return pathname;
};

interface RevalidatePageProps {
  doc: {
    slug: string;
  };
  req: {
    payload: {
      logger: {
        info: (message: string) => void;
        error: (message: string) => void;
      };
    };
  };
}

export const revalidatePage: AfterChangeHook = ({
  doc,
  req,
}: RevalidatePageProps) => {
  const revalidate = async (): Promise<void> => {
    let url;

    try {
      url = formatAppURL(doc);
      const res = await fetch(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL ?? ''}/api/revalidate?secret=${process.env.REVALIDATION_KEY ?? ''}&revalidatePath=${url}`,
      );

      if (res.ok) {
        req.payload.logger.info(`Revalidated path ${url}`);
      } else {
        req.payload.logger.error(`Error revalidating path ${url}`);
      }
    } catch (err: unknown) {
      req.payload.logger.error(
        `Error hitting revalidate route for ${url ?? 'unknown'}`,
      );
    }
  };

  void revalidate();

  return doc;
};
