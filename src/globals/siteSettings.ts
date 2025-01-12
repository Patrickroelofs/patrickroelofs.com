import { type GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
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
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'searchEngineOptimization',
          label: 'SEO',
          fields: [
            {
              name: 'favicon',
              label: 'Favicon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'navigation',
          label: 'Navigation',
          fields: [
            {
              name: 'navLinks',
              label: 'Navigation Links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                },
                {
                  name: 'link',
                  label: 'Link',
                  type: 'relationship',
                  relationTo: 'pages',
                  maxDepth: 1,
                },
              ],
            },
          ],
        },
        {
          name: 'footer',
          label: 'Footer',
          fields: [],
        },
      ],
    },
  ],
};
