/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#82C3D5',
        'components': '#158AAC',
        'subcomponents': '#DBDCD6',
        'texts': '#1F363C',
        'portfolioS': '#52B69A',
        'data': '#34A0A3',
        'buttonColor': '#C44536',
        'buttonColorS': '#772E25',
        'subTitles': '#293D3B',
        'card': '#39AFB3',
      }
    },
  },
  plugins: [],
}

