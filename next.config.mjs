import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ["@phosphor-icons/react"],
	},
	images: {
		qualities: [25, 50, 75, 100],
	},
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
