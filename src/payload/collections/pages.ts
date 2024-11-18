import { type CollectionConfig } from 'payload';
import { revalidatePath } from 'next/cache';
import { Hero } from '@/payload/blocks/hero';
import { Paragraph } from '@/payload/blocks/paragraph';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'slug'],
    useAsTitle: 'title',
  },
  versions: {
    drafts: {
      autosave: true,
    },
    maxPerDoc: 10,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              blocks: [Hero, Paragraph],
              required: true,
              type: 'blocks',
            },
          ],
        },
        {
          label: 'Metadata',
          fields: [
            {
              name: 'meta',
              type: 'group',
              fields: [
                {
                  name: 'description',
                  type: 'textarea',
                },
                {
                  name: 'keywords',
                  type: 'text',
                },
                {
                  name: 'ogImage',
                  type: 'relationship',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
      ],
      type: 'tabs',
    },
  ],
  hooks: {
    afterChange: [
      ({
        doc,
      }: {
        doc: {
          slug: string;
        };
      }) => {
        if (!doc.slug) return;

        if (doc.slug === 'home') {
          revalidatePath('/');
        } else {
          revalidatePath(`/${doc.slug}`);
        }
      },
    ],
  },
};
