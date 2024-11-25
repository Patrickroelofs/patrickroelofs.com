import { deepMerge, type Field } from 'payload';

type Slug = (overrides?: Partial<Field>) => Field;

export const slugField: Slug = (overrides = {}) =>
  deepMerge(
    {
      label: 'Slug',
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      required: true,
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
    },
    overrides,
  );
