import type { CollectionConfig } from 'payload';
import { generateBlurBase64 } from '@/util/generateBlurBase64';

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'blurBase64',
      type: 'text',
      admin: {
        hidden: true,
        disableListColumn: true,
        disableListFilter: true,
      },
    },
  ],
  upload: true,
  hooks: {
    beforeValidate: [generateBlurBase64],
  },
};
