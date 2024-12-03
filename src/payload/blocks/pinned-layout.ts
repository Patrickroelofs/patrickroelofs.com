import { type Block } from 'payload';
import { spacingField } from '@/payload/fields/spacing';

export const PinnedLayout: Block = {
  labels: {
    singular: 'Pinned Layout',
    plural: 'Pinned Layouts',
  },
  slug: 'pinnedLayout',
  fields: [
    {
      label: 'Tabs',
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: 'Content',
          fields: [
            {
              name: 'pinTitleTo',
              label: 'Pin Title To',
              type: 'select',
              required: true,
              options: ['left', 'right'],
            },
            {
              name: 'title',
              label: 'Title',
              type: 'text',
              required: true,
            },
            {
              name: 'blocks',
              label: 'Blocks',
              type: 'blocks',
              required: false,
              blocks: [],
            },
          ],
        },
        {
          name: 'modifiers',
          label: 'Modifiers',
          fields: [spacingField()],
        },
      ],
    },
  ],
};
