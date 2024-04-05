/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#db3022",
        whitep: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
