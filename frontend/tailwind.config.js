/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f3fbf6',
          100: '#dcf5e6',
          200: '#b8ebcd',
          300: '#84dca8',
          400: '#4fc980',
          500: '#2fb463',
          600: '#239552',
          700: '#1d7743',
          800: '#195f37',
          900: '#134c2c',
        },
        gray: {
          50: '#f9fafb', // app background
          100: '#f3f4f6', // cards
          200: '#e5e7eb', // borders
          300: '#d1d5db', // dividers
          400: '#9ca3af', // placeholder text
          500: '#6b7280', // secondary text
          600: '#4b5563', // body text
          700: '#374151', // headings
          800: '#1f2937', // strong headings
          900: '#111827', // near-black
        },
      },
      fontSize: {
        xxs: ['8px', { lineHeight: '16px' }],
      },
    },
  },
  plugins: [],
}
