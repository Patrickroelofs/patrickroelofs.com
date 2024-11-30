import { type Block } from 'payload';
import { SimpleText } from '@/payload/blocks/simple-text';

export const CustomColumns: Block = {
  slug: 'customColumns',
  labels: {
    singular: 'Custom Columns',
    plural: 'Custom Columns',
  },
  fields: [
    {
      interfaceName: 'Column',
      name: 'columns',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'width',
          type: 'select',
          options: [
            { label: '25%', value: '25' },
            { label: '33%', value: '33' },
            { label: '50%', value: '50' },
            { label: '66%', value: '66' },
            { label: '75%', value: '75' },
            { label: '100%', value: '100' },
          ],
          required: true,
        },
        {
          name: 'blocks',
          type: 'blocks',
          blocks: [SimpleText],
        },
      ],
    },
  ],
};
