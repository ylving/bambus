/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bambusBlue: '#354461',
        bambusLightBlue: '#D1D8E6',
        bambusPeach: '#F8E3C9',
        himmel: '#D1D8E6'
      },
      fontFamily: {
        'heading': ['Philosopher', 'sans-serif'],
        'sans': ['Comfortaa', 'sans-serif']
      }
    },
  },
  plugins: [],
}
