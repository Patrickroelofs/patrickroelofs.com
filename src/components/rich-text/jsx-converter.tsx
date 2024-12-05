import { type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';

// TODO: Replace with design system components
const jsxConverter: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  paragraph: ({ node, nodesToJSX }) => {
    return (
      <p className="pb-fluid-xs text-black">
        {nodesToJSX({ nodes: node.children })}
      </p>
    );
  },
});
export { jsxConverter };
