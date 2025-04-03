import path from "node:path";
import { fileURLToPath } from "node:url";
import { Media } from "@/collections/media";
import { Pages } from "@/collections/pages";
import { Users } from "@/collections/users";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Blog } from "./collections/blog";
import { Footer } from "./globals/footer";
import { Navigation } from "./globals/navigation";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    autoLogin: process.env.NODE_ENV === "development" && {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    },
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Pages, Blog, Users, Media],
  globals: [Navigation, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [
    s3Storage({
      enabled: process.env.NODE_ENV === "production",
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET ?? "",
      config: {
        endpoint: process.env.S3_ENDPOINT ?? "",
        region: process.env.S3_REGION ?? "",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY ?? "",
          secretAccessKey: process.env.S3_SECRET_KEY ?? "",
        },
      },
    }),
    seoPlugin({
      generateTitle: ({ title }) => title,
      generateURL: ({ doc, collectionSlug }) =>
        `https://patrickroelofs.com${collectionSlug === "pages" ? "" : `/${collectionSlug}`}/${doc.slug === "home" ? "" : doc.slug}`,
    }),
  ],
});
