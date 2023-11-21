/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "340px",
      // => @media (min-width: 660px) { ... }
      md: "660px",
      // => @media (min-width: 768px) { ... }
      lg: "960px",
      // => @media (min-width: 1024px) { ... }
      xl: "1260px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
        Incosolata: ["Inconsolata", "monospace"],
        Kdam: ["Kdam Thmor Pro", "sans-serif"],
        Abriosa: ["Abriosa", "sans-serif"],
        NexaHeavy: ["Nexa Heavy", "sans-serif"],
        Magical: ["Magical", "sans-serif"],
        AltoneNormal: ["AltoneNormal", "sans-serif"],
        AltoneBold: ["AltoneBold", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
