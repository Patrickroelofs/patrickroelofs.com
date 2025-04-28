import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "node:path";
import { buildConfig } from "payload";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Settings } from "./collections/Settings";
import { Pages } from "./collections/Pages";
import { seoPlugin } from "@payloadcms/plugin-seo";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		autoLogin: process.env.NODE_ENV === "development" && {
			email: process.env.ADMIN_EMAIL || "",
			password: process.env.ADMIN_PASSWORD || "",
		},
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Pages, Users, Media],
	globals: [Settings],
	editor: lexicalEditor(),
	secret: process.env.PAYLOAD_SECRET || "",
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	db: mongooseAdapter({
		url: process.env.DATABASE_URI || "",
	}),
	sharp,
	plugins: [
		seoPlugin({
			collections: [Pages.slug],
			uploadsCollection: Media.slug,
			tabbedUI: true,
			interfaceName: "SeoType",
		}),
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
	],
});
