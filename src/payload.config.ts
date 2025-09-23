import path from "node:path";
import { fileURLToPath } from "node:url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { env } from "./env";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
	admin: {
		autoLogin: env.NODE_ENV === "development" && {
			email: env.ADMIN_EMAIL,
			password: env.ADMIN_PASSWORD,
		},
		user: Users.slug,
		importMap: {
			baseDir: path.resolve(dirname),
		},
	},
	collections: [Users, Media],
	editor: lexicalEditor({}),
	secret: env.PAYLOAD_SECRET,
	typescript: {
		outputFile: path.resolve(dirname, "payload-types.ts"),
	},
	graphQL: {
		disable: true,
	},
	db: mongooseAdapter({
		url: env.DATABASE_URI,
	}),
	sharp,
	plugins: [
		s3Storage({
			enabled: env.NODE_ENV === "production",
			collections: {
				media: true,
			},
			bucket: env.S3_BUCKET ?? "",
			config: {
				endpoint: env.S3_ENDPOINT ?? "",
				region: env.S3_REGION ?? "",
				credentials: {
					accessKeyId: env.S3_ACCESS_KEY ?? "",
					secretAccessKey: env.S3_SECRET_KEY ?? "",
				},
			},
		}),
	],
});
