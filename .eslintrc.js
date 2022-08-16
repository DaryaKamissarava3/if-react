module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['airbnb'],
  plugins: [
    'babel',
    'import',
    'react'
  ],
  rules: {
    "prefer-const": "error",
    "no-console": "off",
    "no-plusplus": "off",
    "eol-last": "off",
    "import/extensions": "off",
    "max-len": ["error", 100, {"ignoreUrls": true}],
    "react/react-in-jsx-scope": "off",
    "object-curly-newline": "off",
    "comma-dangle": "off",
    "react/jsx-one-expression-per-line": "off",
    "linebreak-style": 0,
    "react/prop-types": "off",
    "react/destructuring-assignment":"off",
    "implicit-arrow-linebreak":"off",
    "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
}