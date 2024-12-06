import { type CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    imageSizes: [],
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
