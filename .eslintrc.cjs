module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:astro/recommended',
		'plugin:astro/jsx-a11y-strict',
		'plugin:perfectionist/recommended-natural'
	],
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
			}
		},
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				extraFileExtensions: ['.astro'],
				parser: '@typescript-eslint/parser'
			},
			rules: {
				'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
			}
		},
		{
			extends: ['plugin:@typescript-eslint/recommended'],
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
			rules: {
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{ argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_' }
				]
			}
		},
		{
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			parser: '@typescript-eslint/parser'
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {}
}
