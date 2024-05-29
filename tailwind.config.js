/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DM Sans'],
        
      },
      colors: {
        'primary': '#262626',
        'secondary': '#767676',
        'third': '#6D6D6D',
        'header': '#F5F5F3',
        'borderColor': '#979797',
      },
      maxWidth: {
        'container': '1600px',
      }
    },
  },
  plugins: [
  ],
}

