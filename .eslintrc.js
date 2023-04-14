module.exports = {
  env: {
    node: true,
    mocha: true,
    es6: true,
  },
  ignorePatterns: ['src/test/*.*'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // This should be the last entry.
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'unused-imports', 'import', 'unicorn'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
  },
  rules: {
    'no-console': ['error'],
    // "no-var": ["error"],
    'comma-dangle': 0,
    curly: ['error'],
    'prefer-const': 0,
    'no-template-curly-in-string': 'error',
    // "quotes": ["error", "double"],
    'comma-spacing': 0, // ["error", { before: false, after: true }],
    'semi-spacing': 0, // ["warn", { before: false, after: true }],
    'space-before-blocks': 0, // ["warn", "always"],
    'switch-colon-spacing': ['warn', { after: true, before: false }],
    'keyword-spacing': 0, // ["warn", { before: true, after: true }],
    'template-curly-spacing': 0, // ["error", "never"],
    'rest-spread-spacing': 0, // ["error", "never"],
    'no-multi-spaces': 0, // ["warn", { ignoreEOLComments: false }],

    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'never'],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          markers: ['/'],
          exceptions: ['-', '+'],
        },
        block: {
          markers: ['!'],
          exceptions: ['*'],
          balanced: true,
        },
      },
    ],

    'unused-imports/no-unused-imports': 'error',
    // import node stdlib as `node:...`
    // don't worry, rollup will remove these prefix when building
    'unicorn/prefer-node-protocol': 'error',
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],

    '@typescript-eslint/no-explicit-any': ['warn'],

    '@typescript-eslint/prefer-optional-chain': 0, // ["warn"],
    'no-empty-function': 0,
    '@typescript-eslint/no-empty-function': 0, // ["warn"],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-this-alias': 0,
    '@typescript-eslint/no-empty-interface': ['warn'],

    '@typescript-eslint/no-array-constructor': ['off'],

    'no-extra-parens': 0,
    '@typescript-eslint/no-extra-parens': 0,
    'import/extensions': ['error', 'always'],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    // we need to config this so import are fully specified
    // otherwise @babel/register can't handle TypeScript files
    'import/resolver': {
      typescript: {
        alwaysTryTypes: false,
        extensionAlias: {
          '.js': ['.js'],
        },
        extensions: ['.ts', '.js', '.mjs'],
        fullySpecified: true,
        enforceExtension: true,
      },
    },
  },
  overrides: [
    {
      files: './src/**/*',
      rules: {
        'import/no-commonjs': 'error',
        'import/no-amd': 'error',
      },
    },
  ],
}
