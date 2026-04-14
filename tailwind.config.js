/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B1D3A',
        gold: '#C9A84C',
        'light-gray': '#F5F5F5',
        'dark-gray': '#333333',
        'soft-navy': '#1A2E50',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
}
