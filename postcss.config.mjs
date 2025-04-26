export default {
	plugins: {
		"@csstools/postcss-global-data": {
			files: ["./src/styles/custom-media.css"],
		},
		"postcss-custom-media": {},
		"postcss-flexbugs-fixes": {},
		"postcss-preset-env": {
			stage: 0,
		},
		cssnano: {},
	},
};
