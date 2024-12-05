import { type Block } from 'payload';
import { spacingField } from '@/payload/fields/spacing';
import { RichText } from '@/payload/blocks/rich-text';

export const PinnedLayout: Block = {
  interfaceName: 'PinnedLayoutType',
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
              blocks: [RichText],
            },
          ],
        },
        {
          name: 'options',
          label: 'Options',
          fields: [spacingField()],
        },
      ],
    },
  ],
};
