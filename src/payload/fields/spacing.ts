import { deepMerge, type Field } from 'payload';

type SpacingField = (overrides?: Partial<Field>) => Field;

export const spacingOptions = [
  'fluid-3xs',
  'fluid-2xs',
  'fluid-xs',
  'fluid-sm',
  'fluid-md',
  'fluid-lg',
  'fluid-xl',
  'fluid-2xl',
  'fluid-3xl',
  'fluid-4xl',
  'fluid-5xl',
  'fluid-6xl',
  'fluid-7xl',
  'fluid-8xl',
  'fluid-9xl',
];

export const spacingField: SpacingField = (overrides = {}) =>
  deepMerge(
    {
      name: 'spacing',
      label: 'Spacing',
      type: 'select',
      interfaceName: 'Spacing',
      options: spacingOptions,
      required: true,
    },
    overrides,
  );
