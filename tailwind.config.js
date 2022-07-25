/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        kiran: {
          50: "#ffe9f1",
          100: "#ecc8d2",
          200: "#d9a6b5",
          300: "#c88397",
          400: "#b76179",
          500: "#9e4860",
          600: "#7c374b",
          700: "#5a2735",
          800: "#381620",
          900: "#1a040b",
        },
        snav: {
          50: "#edf1fc",
          100: "#d3d4e1",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#21222e",
          900: "#0a0a16",
        },
      },
    },
  },
  plugins: [],
};
