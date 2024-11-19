import { type CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: '',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 650,
        height: 650,
        position: 'centre',
      },
      {
        name: 'medium',
        width: 1200,
        height: 1200,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: false,
    },
    {
      name: 'caption',
      label: 'Caption',
      type: 'text',
    },
  ],
};
