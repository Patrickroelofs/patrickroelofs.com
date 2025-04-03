import { type Field, deepMerge } from "payload";

const spacingOptions = [
  { label: "3xs", value: "3xs" },
  { label: "2xs", value: "2xs" },
  { label: "xs", value: "xs" },
  { label: "s", value: "s" },
  { label: "m", value: "m" },
  { label: "l", value: "l" },
  { label: "xl", value: "xl" },
  { label: "2xl", value: "2xl" },
  { label: "3xl", value: "3xl" },
];

const spacingStyles = {
  none: "",
  "3xs": "spacing-3xs",
  "2xs": "spacing-2xs",
  xs: "spacing-xs",
  s: "spacing-s",
  m: "spacing-m",
  l: "spacing-l",
  xl: "spacing-xl",
  "2xl": "spacing-2xl",
  "3xl": "spacing-3xl",
};

type SpacingField = (overrides?: Partial<Field>) => Field;

const spacingField: SpacingField = (overrides = {}) =>
  deepMerge(
    {
      name: "spacing",
      label: "Spacing",
      type: "select",
      interfaceName: "Spacing",
      options: spacingOptions,
      required: false,
    },
    overrides,
  );

export { spacingField, spacingStyles };
