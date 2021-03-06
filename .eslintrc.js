module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "standard"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "comma-dangle": [
      "error",
      {
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        arrays: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "no-unused-vars": ["error", { vars: "all", args: "none" }],
    "space-before-function-paren": ["error", "never"],
    "react/prop-types": "off",
    "multiline-ternary": "off",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
};
