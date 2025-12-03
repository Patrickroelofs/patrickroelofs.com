import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URI: z.url(),
		ADMIN_EMAIL: z.email().optional(),
		ADMIN_PASSWORD: z.string().min(1).optional(),
		PAYLOAD_SECRET: z.string().min(1),
		NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
		S3_BUCKET: z.string().min(1).optional(),
		S3_ENDPOINT: z.url().optional(),
		S3_REGION: z.string().min(1).optional(),
		S3_ACCESS_KEY: z.string().min(1).optional(),
		S3_SECRET_KEY: z.string().min(1).optional(),
	},
	client: {
		NEXT_PUBLIC_URL: z.string().min(1),
	},
	runtimeEnv: {
		DATABASE_URI: process.env.DATABASE_URI,
		ADMIN_EMAIL: process.env.ADMIN_EMAIL,
		ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
		PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
		NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
		NODE_ENV: process.env.NODE_ENV,
		S3_BUCKET: process.env.S3_BUCKET,
		S3_ENDPOINT: process.env.S3_ENDPOINT,
		S3_REGION: process.env.S3_REGION,
		S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
		S3_SECRET_KEY: process.env.S3_SECRET_KEY,
	},
});
