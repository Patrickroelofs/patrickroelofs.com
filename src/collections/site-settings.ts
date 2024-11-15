import { type GlobalConfig } from 'payload';
import { icons } from '@phosphor-icons/core';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'siteTitle',
      label: 'Site Title',
      type: 'text',
      required: true,
    },
    {
      name: 'siteDescription',
      label: 'Site Description',
      type: 'textarea',
      required: true,
    },
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
    {
      name: 'socialMediaLinks',
      label: 'Social Media Links',
      type: 'array',
      fields: [
        {
          name: 'icon',
          label: 'Icon',
          type: 'select',
          options: icons.map((icon) => icon.pascal_name),
          required: true,
        },
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
