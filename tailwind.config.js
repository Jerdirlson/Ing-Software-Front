/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagen-fondo-login': "url('./src/assets/img/Background_Login.png')",
        'imagen-fondo-dashboard': "url('./src/assets/img/HomeBackground.png')",

      }
    },
  },
  plugins: [animations],
}

