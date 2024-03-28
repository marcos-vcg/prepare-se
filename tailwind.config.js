/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./App.{js,ts,tsx}", "./src/**/*.{js,ts,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // oxygen: ['Oxygen'],
        // roboto: ['Roboto Condensed'],
      },
      colors: {
        primary: {
          DEFAULT: '#C15D31',
          contrast: '#1E1E1E',
          pressed: '#BF3C00',
          hover: '#CE4100',
        },
    } },
  },
  plugins: [],
}