import { iconField } from "@/fields/icon";
import type { Block } from "payload";

export const FeaturesGridBlock: Block = {
  slug: "FeaturesGrid",
  interfaceName: "FeaturesGridType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "content",
          fields: [
            {
              name: "features",
              type: "array",
              fields: [
                iconField({
                  required: true,
                }),
                {
                  type: "text",
                  name: "title",
                  required: true,
                },
                {
                  type: "textarea",
                  name: "description",
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
