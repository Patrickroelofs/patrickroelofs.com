import { type Block } from 'payload';

export const Columns: Block = {
  slug: 'Columns',
  interfaceName: 'ColumnsType',
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
