import { defineConfig } from "astro/config";

import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/static";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";

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
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
