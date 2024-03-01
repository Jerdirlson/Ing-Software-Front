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
        'imagen-fondo-login': "url('./src/assets/img/backgrounds/Background_Login.png')",
        'imagen-fondo-dashboard': "url('./src/assets/img/backgrounds/HomeBackground.png')",

      },
      boxShadow: {
        'custom': '0 6px 12px 0 rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [animations],
}

