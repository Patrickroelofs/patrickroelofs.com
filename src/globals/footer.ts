import { iconField } from "@/fields/icon";
import type { GlobalConfig } from "payload";

const Footer: GlobalConfig = {
  slug: "footer",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Social Links",
          fields: [
            {
              name: "socialLinks",
              label: "Social Links",
              type: "array",
              fields: [
                iconField(),
                {
                  name: "url",
                  label: "URL",
                  type: "text",
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export { Footer };
