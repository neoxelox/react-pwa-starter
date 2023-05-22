module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-prettier",
    "stylelint-config-html",
  ],
  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    "color-hex-length": "long",
  },
};
