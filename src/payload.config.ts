import path from "node:path";
import { fileURLToPath } from "node:url";
import { Media } from "@/collections/media";
import { Pages } from "@/collections/pages";
import { Users } from "@/collections/users";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Footer } from "./globals/footer";
import { Navigation } from "./globals/navigation";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isBuild = process.env.IS_BUILD === "true";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Pages],
  globals: [Navigation, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: isBuild
        ? process.env.DATABASE_PUBLIC_URL
        : process.env.DATABASE_URL,
    },
  }),
  sharp,
  plugins: [],
});
