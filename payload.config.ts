import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { SiteSettings } from '@/payload/collections/site-settings';
import { Pages } from '@/payload/collections/pages';
import { Media } from '@/payload/collections/media';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  editor: lexicalEditor(),
  globals: [SiteSettings],
  collections: [Pages, Media],
  secret: process.env.PAYLOAD_SECRET ?? '',
  admin: {
    livePreview: {
      url: ({ data }) =>
        `${process.env.NEXT_PUBLIC_URL ?? ''}/api/preview?url=${encodeURIComponent(
          `${process.env.NEXT_PUBLIC_URL ?? ''}/${
            data.slug !== 'home' ? (data.slug as string) : ''
          }`,
        )}`,
      collections: ['pages'],
      breakpoints: [
        {
          name: 'mobile',
          height: 667,
          label: 'Mobile',
          width: 375,
        },
        {
          name: 'tablet',
          height: 1024,
          label: 'Tablet',
          width: 768,
        },
        {
          name: 'desktop',
          height: 1080,
          label: 'Desktop',
          width: 1920,
        },
      ],
    },
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI ?? '',
    },
  }),
  sharp,
  plugins: [
    vercelBlobStorage({
      enabled: true,
      collections: {
        [Media.slug]: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN ?? '',
    }),
  ],
});
