import { type CollectionConfig } from 'payload';
import { revalidatePath } from 'next/cache';
import { Hero } from '@/payload/blocks/hero';
import { slugField } from '@/payload/fields/slug';
import { PinnedLayout } from '@/payload/blocks/pinned-layout';
import { RichText } from '@/payload/blocks/rich-text';

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
              blocks: [Hero, PinnedLayout, RichText],
              required: true,
              type: 'blocks',
            },
          ],
        },
      ],
    },
    slugField({
      trackingField: 'title',
    }),
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
