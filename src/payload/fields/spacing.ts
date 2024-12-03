import { deepMerge, type Field } from 'payload';
import { spacingOptions } from '@/utils/spacing-options';

type SpacingField = (overrides?: Partial<Field>) => Field;

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
