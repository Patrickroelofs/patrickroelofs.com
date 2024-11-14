import { type Block } from 'payload';

export const Paragraph: Block = {
  labels: {
    singular: 'Paragraph',
    plural: 'Paragraphs',
  },
  slug: 'paragraph',
  fields: [
    {
      name: 'content',
      label: 'Content',
      type: 'textarea',
      required: true,
    },
  ],
};
