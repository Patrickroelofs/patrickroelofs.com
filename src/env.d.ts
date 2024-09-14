/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly STORYBLOK_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
