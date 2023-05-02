module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-native"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    // "plugin:react-native/all",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    "react-native/react-native": true,
  },
  ignorePatterns: [".eslintrc.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // Your custom rules go here
    //react must be in scope when using jsx
    "react/react-in-jsx-scope": "off",
    //no empty interface
    "@typescript-eslint/no-empty-interface": "warn",
  },
};
