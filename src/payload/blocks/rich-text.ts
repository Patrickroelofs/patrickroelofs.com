import { type Block } from 'payload';

export const RichText: Block = {
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Text',
  },
  slug: 'richText',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
  ],
};
