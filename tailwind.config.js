/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#364A63",
        gray: "#8091A7",
        purple: "#6576FF",
        lightGray: "#DBDFEA",
      },
    },
  },
  plugins: [],
}
