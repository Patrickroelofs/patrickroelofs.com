import { type Block } from 'payload';

export const Columns: Block = {
  slug: 'columns',
  interfaceName: 'ColumnsType',
  labels: {
    singular: 'Columns',
    plural: 'Columns',
  },
  fields: [
    {
      name: 'columns',
      label: 'Columns',
      type: 'array',
      minRows: 1,
      maxRows: 6,
      fields: [],
    },
  ],
};
