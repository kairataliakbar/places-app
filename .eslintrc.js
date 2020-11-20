module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "implicit-arrow-linebreak": "off",
    "import/prefer-default-export": "off",
    camelcase: "off",
    "arrow-body-style": "off",
    "react/jsx-fragments": "off",
    "object-curly-newline": ["error", {
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],
    "react/jsx-props-no-spreading": "off",
    "react/forbid-prop-types": ["error", {
      forbid: ["any"],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],
    "react/require-default-props": "off",
  },
};
