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

const OptionsAsObject = function (
  array: string[],
  prefix: string,
): Record<string, string> {
  return array.reduce<Record<string, string>>((acc, item: string) => {
    acc[item] = `${prefix}${item}`;
    return acc;
  }, {});
};

export { OptionsAsObject };
