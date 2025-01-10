import { type Block } from 'payload';

export const Hero: Block = {
  slug: 'Hero',
  interfaceName: 'HeroType',
  fields: [
    {
      name: 'description',
      label: 'Description',
      type: 'text',
      required: true,
    },
    {
      name: 'background',
      label: 'Background',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};
