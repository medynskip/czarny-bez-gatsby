module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  plugins: ['@stylistic'],
  rules: {    
    "@stylistic/indent": ["error", 2],
    "import/newline-after-import": "error",
    "@stylistic/no-multiple-empty-lines": ["error", { "max": 1 }],
    "@stylistic/semi": ["error", "always"],
    "import/no-cycle": "error",
    "sort-imports": ["error", { ignoreDeclarationSort: true }],
    "import/order": [
      "error", 
      {
        groups: [ 
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  }
};