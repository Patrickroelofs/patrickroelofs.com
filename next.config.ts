import type { NextConfig } from 'next';
import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'lsa4xszd8vmltnt1.public.blob.vercel-storage.com' },
      { hostname: 'patrickroelofs.com' },
    ],
  },
};

export default withPayload(nextConfig);
