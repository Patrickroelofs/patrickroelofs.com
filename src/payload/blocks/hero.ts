import { type Block } from 'payload';
import heroThumbnail from '../thumbnails/hero_thumbnail.png';

export const Hero: Block = {
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  imageURL: heroThumbnail.src,
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
