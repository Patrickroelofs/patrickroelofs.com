import path from "node:path";
import { fileURLToPath } from "node:url";
import { Media } from "@/collections/media";
import { Pages } from "@/collections/pages";
import { Users } from "@/collections/users";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Blog } from "./collections/blog";
import { Footer } from "./globals/footer";
import { Navigation } from "./globals/navigation";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages, Blog],
  globals: [Navigation, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.IS_BUILD === "true"
          ? process.env.DATABASE_PUBLIC_URL
          : process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      generateTitle: ({ title }) => title,
      generateURL: ({ doc, collectionSlug }) =>
        `https://patrickroelofs.com${collectionSlug === "pages" ? "" : `/${collectionSlug}`}/${doc.slug === "home" ? "" : doc.slug}`,
    }),
  ],
});
