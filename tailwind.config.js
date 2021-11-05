module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#23C9FF',
        DEFAULT: '#4DC1E5',
        dark: '#005091',
      },
      red: {
        DEFAULT: '#ED474A',
        light: '#FF4D40'
      },
      orange: {
        DEFAULT: '#F57636',
        light: '#FE621D'
      },
      yellow: {
        DEFAULT: '#FFC759',
        light: '#F5EE9E'
      },
      green: {
        light: '#56E39F',
        DEFAULT: '#56E39F',
        dark: '#0F5733',
      },
      'primary-text-color': '#404040',
      'secondary-text-color': '#6A7880',
      'muted-text-color': '#90A3AD',
      'bg-dark': '#2E3633',
      'bg-other': '#F0F5F6',
      'bg-light': '#F0F5F3',
      'border-color': '#E6EDF0',
      'border-color-dark': '#AEBCC2',
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      notes: {
        1: '#fcc7c7',
        2: '#fcd5c7',
        3: '#fce2c7',
        4: '#fcf1c7',
        5: '#f7fcc7',
        6: '#e1fcc7',
        7: '#c7fcd3',
        8: '#c7fcf5',
        9: '#c7e9fc',
        10: '#c7d6fc',
        11: '#d2c7fc',
        12: '#e7c7fc',
        13: '#fcc7f8',
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    boxShadow: {
      custom1: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
      custom2: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      custom3: 'rgba(0, 0, 0, 0.24) 0px 3px 8px;',
      custom4: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
      custom5:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
