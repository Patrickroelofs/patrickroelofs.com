import { type Block } from 'payload';

export const Hero: Block = {
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  imageURL: `${process.env.NEXT_PUBLIC_VERCEL_BLOB ?? ''}/admin_thumbnails/hero_thumbnail-ngCfr9shvnGbNlXCgluHPJznWKm1Fc.png`,
  slug: 'hero',
  fields: [
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'text',
      label: 'Text',
      type: 'textarea',
      required: true,
    },
  ],
};
