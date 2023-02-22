/** @type {import('tailwindcss').Config} */
module.exports = {
content: ['./*.{html,js}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      primary: ['Open Sans', 'sans-serif'],
      secondary: ['Jost', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      'sm': '540px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1442px',
    },
    colors: {
      transperent: 'transperent',
      current: 'currentColor',
      white: '#ffffff',
      dark: '#000',
      muted: '#6f6b80', 
      custom: '#f75023',
      semidark: "#2b2d33",
      semilight: "#4b4f5c",
      darkmuted: "#b9b5c9"
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
