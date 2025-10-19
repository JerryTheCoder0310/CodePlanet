/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/app/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary-main': '#36BF9F',
        'primary-dark': '#217360',
        primary: '#212B36',
        neutral: '#F4F6F8',
        'bg-secondary': '#afe6d9',
      },
    },
  },
  plugins: [],
}
