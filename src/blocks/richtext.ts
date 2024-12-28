import { type Block } from 'payload';

export const RichText: Block = {
  slug: 'RichText',
  interfaceName: 'RichTextType',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
  ],
};
