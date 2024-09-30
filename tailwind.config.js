/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "Jacquarda":  ["'Jacquarda Bastarda 9'", "serif"],
      "Arvo": ["'Arvo'", "serif"],
    },
    extend: {},
  },
  plugins: [],
}