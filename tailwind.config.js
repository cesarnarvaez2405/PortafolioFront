/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      work: ['"Work Sans"', "sans-serif"],
      walton: ["walton", "sans"],
      sacramento: ['"Sacramento"'],
      quicksand: ['"Quicksand"', "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
