/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'disp':['Raleway']
    },
    extend: {
      colors:{
        "lPri":'#0AA1DD',
        "dPri":'#2155CD',
        "lSec":'#E8F9FD',
        "dSec":'#79DAE8',
      }
    },
  },
  plugins: [],
}
