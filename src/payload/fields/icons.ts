import { deepMerge, type Field } from 'payload';
import { icons } from '@phosphor-icons/core';

type iconField = (overrides?: Partial<Field>) => Field;

export const iconField: iconField = (overrides = {}) =>
  deepMerge(
    {
      name: 'icon',
      label: 'Icon',
      type: 'select',
      interfaceName: 'Icons',
      options: icons.map((icon) => icon.pascal_name),
      required: true,
    },
    overrides,
  );
