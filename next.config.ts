import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'patrickroelofs.com',
      },
      {
        protocol: 'https',
        hostname: 'patrickroelofs.dev',
      },
      {
        protocol: 'https',
        hostname: 'yrbnbekprjwfbnaixtec.supabase.co/storage/v1/s3',
      },
    ],
  },
};

export default withPayload(nextConfig);
