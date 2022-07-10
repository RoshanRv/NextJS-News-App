/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'disp':['Quicksand']
    },
    extend: {
      colors:{
        // "lPri":'#000',
        "dPri":'#92B4EC',
        "lSec":'#FFE69A',
        "dSec":'#FFD24C',
      }
    },
  },
  plugins: [],
}
