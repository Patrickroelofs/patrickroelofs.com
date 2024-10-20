import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  dts: true,
  entry: ["src/**/*.tsx"],
  external: ["react"],
  format: ["esm"],
  sourcemap: true,
  ...options,
}));
