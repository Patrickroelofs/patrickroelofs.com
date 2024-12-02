import { type GlobalConfig } from 'payload';
import { iconField } from '@/payload/fields/icons';

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
  fields: [
    {
      name: 'socialMediaLinks',
      label: 'Social Media Links',
      type: 'array',
      fields: [
        iconField(),
        {
          name: 'platform',
          label: 'Platform',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
};
