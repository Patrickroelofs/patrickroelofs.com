const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/node'),
    require.resolve('@vercel/style-guide/eslint/react'),
    require.resolve('@vercel/style-guide/eslint/next'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
  ],
  parserOptions: { project },
  settings: {
    'import/resolver': { typescript: { project } },
  },
  rules: {},
  overrides: [
    {
      files: ['**/*.js'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
    },
    {
      files: ['*.config.{mjs,ts}', 'src/app/**/*.tsx', 'src/app/**/*.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/prefer-default-export': ['error', { target: 'any' }],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
};
