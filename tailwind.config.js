/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1832px',
    },
    extend: {
      backgroundImage: {
        'imagen-fondo-login': "url('./src/assets/img/backgrounds/Background_Login.jpg')",
        'imagen-fondo-dashboard-pc': "url('./src/assets/img/backgrounds/BackGround_PC.jpg')",
        'imagen-fondo-dashboard-movil': "url('./src/assets/img/backgrounds/BackGround_PHONE.jpg')",
      },
      boxShadow: {
        'customNav': '0 6px 12px 0 rgba(0, 0, 0, 0.25)',
        'customCard': '0 12px 12px 0 rgba(0, 0, 0, 0.25) , 0 0 10px 0 rgba(0, 0, 0, 0.2)',
        'smallShadow': 'rgba(0,0,0,0.16) 0px 0px 10px',
        'bigShadow': 'rgba(0,0,0,0.16) 0px 0px 20px',
        'customButton': 'rgba(0,0,0,0.16) 0px 0px 35px'
      },
      colors: {
        'primary-blue': '#2176FF',
        'secondary-blue': '#33A1FD',
        'aux-1-blue': '#2C91FE',
        'aux-2-blue': '#2176FF',
        'primaryGray': '#7F7F7F',
        'secondaryGray': '#A5A3A3'
      }
    },
  },
  plugins: [animations],
}

