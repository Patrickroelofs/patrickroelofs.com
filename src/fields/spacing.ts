import { deepMerge, type Field } from 'payload';

type SpacingField = (overrides?: Partial<Field>) => Field;

export const spacingOptions = ['py-6', 'py-12', 'py-16', 'py-24'];

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
