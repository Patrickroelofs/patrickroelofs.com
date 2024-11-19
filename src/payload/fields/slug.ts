import { deepMerge, type Field } from 'payload';

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field;

// TODO: Auto update the slug field based on the title field
export const slugField: Slug = (_fieldToUse = 'title', overrides = {}) =>
  deepMerge(
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      validate: (value: string) => {
        const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

        if (slugRegex.test(value)) {
          return true;
        }

        return 'Invalid slug. Must be kebab-case (lowercase, words separated by hyphens)';
      },
      index: true,
      label: 'Slug',
      required: true,
    },
    overrides,
  );
