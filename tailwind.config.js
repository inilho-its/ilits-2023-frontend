/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      'min-lg': '1023px',
      // => @media (min-width: 1023px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1440px',

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        primary: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        neutral: {
          100: '#FFFFFF',
          200: '#DCDCDC',
          300: '#D5D5D5',
          400: '#C9C9C9',
          500: '#AEAEAE',
          600: '#8E8E8E',
          700: '#6E6E6E',
          800: '#575757',
          900: '#393939',
          1000: '#121212',
        },
        primary: {
          main: '#3872C3',
          surface: '#D7E3F3',
          border: '#BDD0EB',
          hover: '#2F5FA2',
          pressed: '#1C3961',
          focus: 'rgba(56, 114, 195, 0.20)',
        },
        semantic: {
          main: '#0288D1',
          surface: '#CCE7F6',
          border: '#ABD7F0',
          hover: '#0271AE',
          pressed: '#014468',
          focus: 'rgba(2, 136, 209, 1)',
        },
        success: {
          main: '#2E7D32',
          surface: '#D5E5D6',
          border: '#D5E5D6',
          hover: '#26682A',
          pressed: '#173E19',
          focus: 'rgba(46, 125, 50, 0.20)',
        },
        warning: {
          main: '#FFA726',
          surface: '#FFEDD4',
          border: '#FFE2B7',
          hover: '#D48B20',
          pressed: '#805313',
          focus: 'rgba(255, 167, 38, 0.20)',
        },
        danger: {
          main: '#D32F2F',
          surface: '#F6D5D5',
          border: '#F0BABA',
          hover: '#B02727',
          pressed: '#691717',
          focus: 'rgba(211, 47, 47, 0.20)',
        },
        bone: {
          50: '#FCFCFA',
          100: '#FAF9F6',
          200: '#F7F6F2',
          300: '#F4F4EE',
          400: '#F2F1E9',
          500: '#EFEEE5',
          600: '#C7C6BF',
          700: '#9F9F99',
          800: '#787773',
          900: '#504F4C',
          1000: '#30302E',
        },
        green: {
          50: '#D3EBDF',
          100: '#B6DECA',
          200: '#92CEB0',
          300: '#6DBD95',
          400: '#49AD7B',
          500: '#259D61',
          600: '#1E8250',
          700: '#186840',
          800: '#124E30',
          900: '#30302E',
          1000: '#071F13',
        },
        lightBlue: {
          50: '#DDF0F9',
          100: '#C7E6F5',
          200: '#ABD9F1',
          300: '#8FCDEC',
          400: '#73C0E7',
          500: '#57B4E3',
          600: '#4896BD',
          700: '#3A7897',
          800: '#2B5A71',
          900: '#1D3C4B',
          1000: '#11242D',
        },
        orange: {
          50: '#FDE3D6',
          100: '#FBD1BA',
          200: '#FABB98',
          300: '#F8A476',
          400: '#F68D54',
          500: '#F57732',
          600: '#CC6329',
          700: '#A34F21',
          800: '#7A3B19',
          900: '#512710',
          1000: '#31170A',
        },
        pink: {
          50: '#FCEEEC',
          100: '#FBE3E0',
          200: '#F9D5D0',
          300: '#F7C7C1',
          400: '#F5B9B1',
          500: '#F4ABA2',
          600: '#CB8E87',
          700: '#A2726C',
          800: '#7A5551',
          900: '#513936',
          1000: '#302220',
        },
        red: {
          50: '#FDE0DE',
          100: '#FCCBC8',
          200: '#FBB2AD',
          300: '#FA9891',
          400: '#F97E76',
          500: '#F8655B',
          600: '#CE544B',
          700: '#A5433C',
          800: '#7C322D',
          900: '#52211E',
          1000: '#311412',
        },
        yellow: {
          50: '#FFF2D8',
          100: '#FFE9BE',
          200: '#FFDE9E',
          300: '#FFD37D',
          400: '#FFC85D',
          500: '#FFBE3D',
          600: '#D49E32',
          700: '#AA7E28',
          800: '#7F5F1E',
          900: '#553F14',
          1000: '#33260C',
        },
        background: {
          cream: '#EAE5DA',
          liteCream: '#FEF3D9',
        },
        dark: '#333333',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: 0.99,
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: 0.4,
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  configViewer: {
    themeReplacements: {
      neutral: {
        100: '#FFFFFF',
        200: '#DCDCDC',
        300: '#D5D5D5',
        400: '#C9C9C9',
        500: '#AEAEAE',
        600: '#8E8E8E',
        700: '#6E6E6E',
        800: '#575757',
        900: '#393939',
        1000: '#121212',
      },
    },
  },
};
