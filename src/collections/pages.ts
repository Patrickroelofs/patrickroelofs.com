import { type CollectionConfig } from 'payload';
import { slugField } from '@/fields/slug';
import { Columns } from '@/blocks/columns';
import { RichText } from '@/blocks/richtext';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    slugField({
      trackingField: 'title',
    }),
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      required: true,
      blocks: [Columns, RichText],
    },
  ],
};
