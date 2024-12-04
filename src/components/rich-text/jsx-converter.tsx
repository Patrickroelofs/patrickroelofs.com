import { type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';

// TODO: Replace with design system components
const jsxConverter: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
});

export { jsxConverter };
