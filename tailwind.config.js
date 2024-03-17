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
        'customNav': '0 6px 12px 0 rgba(0, 0, 0, 0.25)',
        'customCard': '0 12px 12px 0 rgba(0, 0, 0, 0.25) , 0 0 10px 0 rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'primary-blue': '#2176FF',
        'secondary-blue': '#33A1FD',
        'aux-1-blue': '#2C91FE',
        'aux-2-blue': '#2176FF'
      }
    },
  },
  plugins: [animations],
}

