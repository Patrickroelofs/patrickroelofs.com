import { type CollectionConfig } from 'payload';
import { revalidatePath } from 'next/cache';
import { Hero } from '@/payload/blocks/hero';
import { slugField } from '@/payload/fields/slug';
import { CustomColumns } from '@/payload/blocks/custom-columns';

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
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'blocks',
              blocks: [Hero, CustomColumns],
              required: true,
              type: 'blocks',
            },
          ],
        },
      ],
    },
    slugField(),
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
