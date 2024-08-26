/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page-sections/footers/**/*.{html,js}",
    "./page-sections/faq/**/*.{html,js}",
    "./elements/headers/**/*.{html,js}",
    "./elements/flyout-menus/**/*.{html,js}",
    "./elements/banners/**/*.{html,js}",
    "./elements/404/**/*.{html,js}"
  ],
  theme: {
    extend: {
      transform: ['hover', 'focus'],
      aspectRatio: {
        '577/310': '577 / 310',
      },
    },
  },
  plugins: [],
}
