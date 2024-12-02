import { type GlobalConfig } from 'payload';

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  label: 'Navigation',
  fields: [
    {
      name: 'navigationLinks',
      label: 'Main Navigation Links',
      type: 'array',
      fields: [
        {
          name: 'page',
          label: 'Page',
          type: 'relationship',
          relationTo: 'pages',
          required: true,
        },
      ],
    },
  ],
};
