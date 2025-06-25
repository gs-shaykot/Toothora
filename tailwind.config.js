/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: '#3b82f6',
        secondary: '#2563eb', 
        lekha: '#18181b'
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}