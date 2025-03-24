export default {
  plugins: {
    "@csstools/postcss-global-data": {
      files: ["./src/styles/custommedia.css"],
    },
    "postcss-custom-media": {},
    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  },
};
