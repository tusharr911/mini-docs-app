/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        zincMain: ["zinc-900/90"],
        greenMain: ["green-400/60"],
      },
    },
  },
  plugins: [],
};
