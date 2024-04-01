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
        // white: {
        //   bone: '#FBF6F1',
        //   offWhite: '#FCF6F0',
        //   DEFAULT: '#FFFFFF',
        //   transparent: {
        //     DEFAULT: '#FFFFFF4D',
        //   },
        // },
        background: {
          DEFAULT: "#3c3c3c",
          contrast: '#515151',
          pressed: '#666666',
          hover: '#8c8c8c',
          light: '#b5b5b5'
        },
        background2: "#3c3c3c", 
    } },
  },
  plugins: [],
}