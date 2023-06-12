module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      scrollbarHide: {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};