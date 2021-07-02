module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },

  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin

    'prettier', // All configs have been merged into one! https://github.com/prettier/eslint-config-prettier/blob/main/CHANGELOG.md#version-800-2021-02-21

    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],

  plugins: ['react', '@typescript-eslint'],

  settings: {
    react: {
      pragma: 'React',
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },

  rules: {
    // your rules
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'prefer-template': ['warn'],
    'react/prop-types': [2, { ignore: ['children'] }],
  },
}
