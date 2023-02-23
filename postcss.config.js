// module.exports = {
//   'plugins': {
//     'tailwindcss': {},
//     'autoprefixer': {},
//   },
// };
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    'postcss-logical': {
      preserve: true
    }
  }
}
