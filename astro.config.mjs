import { defineConfig } from "astro/config";

import { loadEnv } from "vite";
import vercel from "@astrojs/vercel/static";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";

function removeStoryblokAttributes(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const dataBlokElements = doc.querySelectorAll("[data-blok-c]");
  const dataBlokUIDElements = doc.querySelectorAll("[data-blok-uid]");

  dataBlokElements.forEach((element) => {
    element.removeAttribute("data-blok-c");
  });

  dataBlokUIDElements.forEach((element) => {
    element.removeAttribute("data-blok-uid");
  });

  return doc.body.innerHTML;
}

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
    build: {
      rollupOptions: {
        plugins: [
          {
            name: "removeStoryblokAttributes",
            enforce: "post",
            transformIndexHtml(html) {
              return removeStoryblokAttributes(html);
            },
          },
        ],
      },
    },
  },
});
