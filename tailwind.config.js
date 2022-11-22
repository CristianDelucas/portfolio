/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'wave-1': "url('assets/images/backgrounds-waves/wave.svg')",
        'wave-1-dark': "url('assets/images/backgrounds-waves/wave-dark.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'Barlow': ['Barlow'],
        'MrDafoe': ['MrDafoe']
      }
    },
    // fontSize: {
    //   sm: '0.8rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   xxl: '1.563rem',
    //   xxxl: '1.953rem',
    //   xxxxl: '2.441rem',
    //   xxxxxl: '3.052rem',
    // }
  },
  plugins: [],
  darkMode: 'class',
}
