// @ts-check

const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config({
  files: ["src/**/*.ts", "src/**/*.tsx"],
  extends: [tseslint.configs.recommendedTypeChecked],
  languageOptions: {
    globals: {
      ...globals.es2020,
      ...globals.browser,
    },
    parserOptions: {
      project: "tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  },
  rules: {
  },
});
