/** @type {import ('eslint').ESLint.ConfigData} */
module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: '18.2.0',
    },
  },
  ignorePatterns: ['**/node_modules/**'],
  plugins: [],
  extends: [
    'airbnb',
    'next/core-web-vitals',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended', // must be at bottom of list
  ],
  rules: {
    // import
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',

    'no-param-reassign': 'off', // turned off for immer like produce function
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],

    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'unknown', 'object', 'type'],
      },
    ],
  },
  overrides: [
    /** TypeScript File Config */
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: './tsconfig.eslint.json' },
      extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/indent': 'off',

        // disable rules for '_'
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/naming-convention': [
          'off',
          {
            selector: 'variable',
            format: null,
            custom: {
              regex: '^_$',
              match: false,
            },
          },
        ],

        'import/no-extraneous-dependencies': [
          'error',
          {
            peerDependencies: ['**/test/**/*', '**/*.test.*', '**/*.spec.*'],
            devDependencies: ['**/test/**/*', '**/*.test.*', '**/*.spec.*', 'vite.config.ts'],
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.eslint.json',
          },
        },
      },
    },
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        'vitest-globals/env': true,
      },
      extends: ['plugin:vitest-globals/recommended', 'plugin:vitest/recommended', 'plugin:testing-library/react'],
    },
  ],
};
