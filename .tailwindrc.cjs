const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.pink["500"],
        secondary: colors.yellow["500"],
        success: colors.emerald["500"],
        danger: colors.rose["500"],
        warning: colors.yellow["500"],
        info: colors.sky["500"],
        dark: colors.slate["900"],
        light: colors.white,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
