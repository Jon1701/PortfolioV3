module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    rules: {
      "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"]
    }
};
