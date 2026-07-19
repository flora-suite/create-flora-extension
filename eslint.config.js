// @ts-check

const globals = require("globals");
const tseslint = require("typescript-eslint");

module.exports = tseslint.config(
  { ignores: ["dist/**", "examples/**", "template/**"] },
  {
  files: ["src/**/*.ts", "src/**/*.tsx"],
  extends: [tseslint.configs.recommendedTypeChecked],
  languageOptions: {
    globals: {
      ...globals.node,
    },
    parserOptions: {
      project: "tsconfig.json",
      tsconfigRootDir: __dirname,
    },
  },
  },
);
