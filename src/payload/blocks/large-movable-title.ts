import { type Block } from 'payload';

export const LargeMovableTitle: Block = {
  labels: {
    singular: 'Large Movable Title',
    plural: 'Large Movable Titles',
  },
  slug: 'large-movable-title',
  fields: [
    {
      name: 'leftSide',
      label: 'Left Side',
      type: 'text',
      required: true,
    },
    {
      name: 'rightSide',
      label: 'Right Side',
      type: 'text',
      required: true,
    },
  ],
};
