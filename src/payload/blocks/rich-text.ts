import { type Block } from 'payload';

export const RichText: Block = {
  interfaceName: 'RichTextType',
  labels: {
    singular: 'Rich Text',
    plural: 'Rich Texts',
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
