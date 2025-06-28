import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ["@phosphor-icons/react"],
	},
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
