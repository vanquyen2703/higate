/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {

    extend: {
      fontFamily: {
        'OpenSans': ['Open Sans'],
      },
      boxShadow: {
        'normal': '0px 2px 1px -1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.02)',
        'hover': '0px 8px 10px 1px #0000000f',
      },
      flex: {
        'sidebar': '0 0 360px',
        'sidebar-tablet': '0 0 260px',
      },
      keyframes: {
        fade_infinite: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fade_infinite: 'fade_infinite 1.5s alternate'
      }
    },
    colors: {
      'primary-1': '#0F23D0',
      'secondary': '#ffffff',
      'tertiary': '#6776F3',
      'body-text': '#00000099',//rgba(0, 0, 0, 0.6)//
      'title-text': '#000000de', //rgba(0,0,0,0.87)//
      'description': '#0000004D', //rgba(0, 0, 0, 0.3)//
      'during': '#00000000',
      'button-primary': '#0F23D0',
      'button-secondary': '#ffffff',
      'dropdown-bg': '#001acc',
      'bg-blue': '#0B1992',
      'border-l': '#0F23D0',
      'border-2': '#0000001F',//rgba(0, 0, 0, 0.12)//
      'tab-active': 'rgba(15, 35, 208, 0.04)',
      'border-active': 'rgba(15, 35, 208, 0.08)',
      'background-linear': 'linear-gradient(58.17deg, rgba(85, 103, 255, 0.16) 6.62%, rgba(85, 103, 255, 0) 63.21%), #FFFFFF;'
    },

    fontSize: {
      '4xl': '36px',
      'body-text1': '16px',
      'body-text2': '14px',
      'subtitle2': '14px',
      'subtitle3': '36px',
      'subtitle4': '42px'
    },
    lineHeight: {
      'body-text1': '21.79px',
      'body-text2': '20.02px',
      'subtitle1': '28px',
      'subtitle2': '21.98px',
      'subtitle3': '43.2px'
    },
    screens: {
      '375': '375px',
      '480': '480px',
      '540': '540px',
      '600': '600px',
      '768': '768px',
      '800': '800px',
      '1024': '1024px',
      '1280': '1280px',
      '1440': '1440px',
      '1920': '1920px',
    },
    aspectRatio: {
      '16/10': '16 / 10',
    },

  },
  plugins: [

  ],
}
