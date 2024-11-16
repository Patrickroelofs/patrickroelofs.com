import { type CollectionConfig } from 'payload';
import { Hero } from '@/blocks/hero';
import { Paragraph } from '@/blocks/paragraph';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              blocks: [Hero, Paragraph],
              required: true,
              type: 'blocks',
            },
          ],
        },
      ],
      type: 'tabs',
    },
  ],
};
