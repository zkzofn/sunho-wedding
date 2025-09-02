/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF9FB",
          100: "#FEF2F4",
          200: "#F3DCE1",
          300: "#DDBEBF",
          400: "#CA8F99",
          500: "#BD435E",
          600: "#A25C6F",
          700: "#8B8388",
          800: "#792F3A",
          900: "#4E3F4A",
        },
        secondary: {
          100: "#BEC0DD",
          200: "#8F9DCA",
          300: "#614CD9",
        },
      },
      fontFamily: {
        kapakana: ["Playfair Display", "serif"],
        jeju: ["Noto Serif KR", "serif"],
        nanum: ["Nanum Myeongjo", "serif"],
      },
      boxShadow: {
        custom: "4px 4px 8.6px 0px rgba(96, 40, 66, 0.39)",
        button: "2px 2px 3.3px 0px rgba(190, 160, 186, 0.15)",
      },
    },
  },
  plugins: [],
};
