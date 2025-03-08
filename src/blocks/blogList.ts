import type { Block } from "payload";

export const BlogListBlock: Block = {
  slug: "BlogList",
  interfaceName: "BlogListType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          fields: [
            {
              name: "articles",
              type: "array",
              label: "Articles",
              fields: [
                {
                  name: "article",
                  type: "relationship",
                  relationTo: "blog",
                  required: true,
                },
              ],
            },
          ],
        },
        {
          name: "settings",
          fields: [],
        },
      ],
    },
  ],
};
