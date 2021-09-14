module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    // },
  },
  variants: {
    extend: {},
    // container: {
    //   center: true,
    //   padding: '2rem',
    // }
  },
  plugins: [],
}
