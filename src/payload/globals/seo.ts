import { type GlobalConfig } from 'payload';

export const SEO: GlobalConfig = {
  slug: 'SEO',
  label: 'SEO',
  fields: [
    {
      name: 'siteTitle',
      label: 'Site Title',
      type: 'text',
    },
    {
      name: 'siteDescription',
      label: 'Site Description',
      type: 'text',
    },
  ],
};
