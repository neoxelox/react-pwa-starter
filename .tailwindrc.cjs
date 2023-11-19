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
        primary: colors["indigo"],
        secondary: colors["yellow"],
        success: colors["emerald"],
        danger: colors["rose"],
        warning: colors["yellow"],
        info: colors["sky"],
        dark: colors["slate"],
        light: colors["white"],
      },
    },
  },
  variants: {
    extend: {},
  },
  safelist: [],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("@tailwindcss/aspect-ratio")],
};
