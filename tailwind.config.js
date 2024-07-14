/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./elements/headers/**/*.{html,js}",
    "./elements/flyout-menus/**/*.{html,js}",
    "./elements/banners/**/*.{html,js}",
    "./elements/404/**/*.{html,js}"
  ],
  theme: {
    extend: {
      transform: ['hover', 'focus']
    },
  },
  plugins: [],
}
