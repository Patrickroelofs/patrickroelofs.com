import { defineConfig } from "astro/config";

import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/static";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import { removeStoryblokAttributes } from "./src/utils/removeStoryblokAttributes";

const env = loadEnv("", process.cwd(), "STORYBLOK");

export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_ACCESS_TOKEN,
      components: {
        page: "components/Page",
        Text: "components/Text",
      },
    }),
  ],
  vite: {
    plugins: [
      basicSsl(),
      {
        name: "remove-data-blok-c",
        enforce: "post",
        transformIndexHtml(html) {
          if (process.env.NODE_ENV === "production") {
            return removeStoryblokAttributes(html);
          }
          return html;
        },
      },
    ],
    server: {
      https: true,
    },
  },
});
