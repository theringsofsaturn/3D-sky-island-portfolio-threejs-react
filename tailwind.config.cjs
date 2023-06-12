module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
