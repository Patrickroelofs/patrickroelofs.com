import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'patrickroelofs.com',
      },
      {
        protocol: 'https',
        hostname: 'patrickroelofs.dev',
      },
    ],
  },
};

export default withPayload(nextConfig);
