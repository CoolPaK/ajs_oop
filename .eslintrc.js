module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 'off',
    'indent': ['error',
      2
    ],
    'linebreak-style': ['error', 'unix'
    ],
    'quotes': ['error', 'single'
    ],
    'semi': ['error', 'always'
    ],
  },
};