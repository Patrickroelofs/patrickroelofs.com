import type { Block } from "payload";
import { grammars } from "tm-grammars";

export const CodeBlock: Block = {
  slug: "CodeBlock",
  interfaceName: "CodeType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          label: "Content",
          fields: [
            {
              name: "code",
              label: "Code",
              type: "code",
              required: true,
            },
          ],
        },
        {
          name: "settings",
          label: "Settings",
          fields: [
            {
              name: "language",
              label: "Code Language",
              type: "select",
              required: true,
              options: grammars.map((grammar) => ({
                label: grammar.displayName,
                value: grammar.name,
              })),
            },
          ],
        },
      ],
    },
  ],
};
