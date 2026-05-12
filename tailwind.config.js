const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  fontFamily: {
    display: ['Rowan', 'Public Sans', ...defaultTheme.fontFamily.sans],
    body: ['Public Sans', ...defaultTheme.fontFamily.sans],
  },
  theme: {
    extend: {
      fontFamily: {
        rowan: ['Rowan', 'ui-serif', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#03755E',
        mongazon: '#F1BA30',
      },
      borderWidth: {
        0.75: '0.75px',
      },
      fontSize: {
        '2xl': '2rem',
      },
    },
  },
};
