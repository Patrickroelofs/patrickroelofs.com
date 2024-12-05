import { type JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';
import { cva } from 'class-variance-authority';

// TODO: Replace with design system components
const jsxConverter: JSXConvertersFunction = ({ defaultConverters }) => ({
  ...defaultConverters,
  heading: ({ node, nodesToJSX }) => {
    const Level = node.tag;

    const headingStyles = cva(['block mb-fluid-md'], {
      variants: {
        heading: {
          h1: [],
          h2: [],
          h3: ['text-4xl font-medium leading-snug'],
          h4: [],
          h5: [],
          h6: [],
        },
      },
    });

    return (
      <Level
        className={headingStyles({
          heading: Level,
        })}
      >
        {nodesToJSX({ nodes: node.children })}
      </Level>
    );
  },
  paragraph: ({ node, nodesToJSX }) => {
    return (
      <p className="pb-fluid-xs text-black">
        {nodesToJSX({
          nodes: node.children,
        })}
      </p>
    );
  },
  quote: ({ node, nodesToJSX }) => {
    return (
      <blockquote className="border-red pl-fluid-md my-fluid-lg border-l-6 font-serif text-2xl font-medium text-black">
        {nodesToJSX({ nodes: node.children })}
      </blockquote>
    );
  },
});
export { jsxConverter };
