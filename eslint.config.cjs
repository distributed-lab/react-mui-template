const {
  fixupPluginRules,
  fixupConfigRules,
} = require("@eslint/compat");

const simpleImportSort = require("eslint-plugin-simple-import-sort");
const prettier = require("eslint-plugin-prettier");
// const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const reactI18N = require("eslint-plugin-react-i18n");
const globals = require("globals");
const tsParser = require("@typescript-eslint/parser");
const js = require("@eslint/js");

const {
  FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

module.exports = [
  {
    ignores: [
      "**/dist",
      "**/.eslintrc.cjs",
      "dist/*.js",
      "**/index.html",
      "**/*.md",
      "static/env.js",
      "**/node_modules",
    ],
  },

  ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:react-i18n/recommended",
    "prettier",
  )),

  {
    plugins: {
      "simple-import-sort": simpleImportSort,
      prettier,
      // "@typescript-eslint": typescriptEslint,
      "react-i18n": fixupPluginRules(reactI18N),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        tsconfigRootDir: ".",

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },

      "import/resolver": {
        typescript: {},

        node: {
          paths: ["src"],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },

      react: {
        version: "detect",
      },
    },

    rules: {
      "prettier/prettier": ["error", {}, {
        usePrettierrc: true,
      }],

      "arrow-parens": 0,
      "no-debugger": 1,

      "no-warning-comments": [1, {
        terms: ["hardcoded"],
        location: "anywhere",
      }],

      "no-return-await": 0,
      "object-curly-spacing": ["error", "always"],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "no-var": "error",
      "comma-dangle": [1, "always-multiline"],
      "linebreak-style": ["error", "unix"],

      "max-len": [1, {
        code: 100,
        comments: 100,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      }],

      "no-console": [1, {
        allow: ["warn", "error"],
      }],

      "react-i18n/no-dynamic-translation-keys": "error",
      "react-i18n/no-missing-interpolation-keys": "error",
      "react/jsx-curly-brace-presence": ["warn", "never"],
      "react/display-name": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },

  ...fixupConfigRules(
    compat.extends("plugin:@typescript-eslint/recommended", "plugin:import/typescript"),
  ).map(config => ({
    ...config,
    files: ["**/*.ts?(x)"],
  })),

  {
    files: ["**/*.ts?(x)"],

    languageOptions: {
      parser: tsParser,
    },
  }
];
