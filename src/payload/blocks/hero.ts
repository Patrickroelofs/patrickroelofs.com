import { type Block } from 'payload';

export const Hero: Block = {
  interfaceName: 'HeroType',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
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
