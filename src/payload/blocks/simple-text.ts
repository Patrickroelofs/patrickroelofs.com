import { type Block } from 'payload';

export const SimpleText: Block = {
  labels: {
    singular: 'Simple Text',
    plural: 'Simple Texts',
  },
  // imageURL: `${process.env.NEXT_PUBLIC_VERCEL_BLOB ?? ''}/admin_thumbnails/hero_thumbnail-ngCfr9shvnGbNlXCgluHPJznWKm1Fc.png`,
  slug: 'simpleText',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
    },
  ],
};
