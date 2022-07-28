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
          50: "#edf0fe",
          100: "#ced3e6",
          200: "#afb5d0",
          300: "#8f98bc",
          400: "#707aa8",
          500: "#56618e",
          600: "#434b6f",
          700: "#2f3650",
          800: "#2b3148",
          900: "#050b17",
        },
      },
    },
  },
  plugins: [],
};
