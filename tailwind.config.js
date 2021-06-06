module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    opacity: {
      '0': '0',
     '25': '.25',
     '50': '.5',
     '75': '.75',
     '10': '.1',
     '20': '.2',
     '30': '.3',
     '40': '.4',
     '50': '.5',
     '60': '.6',
     '70': '.7',
     '80': '.8',
     '90': '.9',
      '100': '1',
    },
    extend: {
      fontFamily: {
        Lobster: ['Lobster Two'],
        Poppins: ['Poppins'],
        Nunito: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
