import { iconField } from "@/fields/icon";
import {
  BoldFeature,
  ParagraphFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

const FeatureCardBlock: Block = {
  slug: "feature-card",
  interfaceName: "FeatureCardType",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Content",
          fields: [
            iconField(),
            {
              name: "text",
              type: "richText",
              label: "Text",
              required: true,
              editor: lexicalEditor({
                features: [ParagraphFeature()],
              }),
            },
          ],
        },
        {
          name: "settings",
          label: "Settings",
          fields: [],
        },
      ],
    },
  ],
};

export { FeatureCardBlock };
