/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        turquoise: {
          50: 'var(--turquoise-50)',
          100: 'var(--turquoise-100)',
          200: 'var(--turquoise-200)',
          300: 'var(--turquoise-300)',
          400: 'var(--turquoise-400)',
          500: 'var(--turquoise-500)',
          600: 'var(--turquoise-600)',
          700: 'var(--turquoise-700)',
          800: 'var(--turquoise-800)',
          900: 'var(--turquoise-900)',
        },
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200%': '200%',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};