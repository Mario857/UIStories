module.exports = {
    "plugins": [
      "react-hooks",
    ],
    "rules": {
      "react/jsx-filename-extension": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jsx-a11y/anchor-is-valid": "off"
    },

    "globals": {
      "__DEV__": true,
      "FormData": true,
      "FileReader": true,
      "fetch": true,
      "navigator": true
    },

    "settings": {
      "import/resolver": {
        "babel-module": {}
      }
    },

    "overrides": [
      {
        "files": [ "*.test.js" ],
        "env": {
          "jest": true
        }
      }
    ],

    "parser": "babel-eslint",
    "extends": "airbnb"
};