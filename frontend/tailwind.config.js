/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce1f5',
          200: '#99c3eb',
          300: '#66a5e1',
          400: '#3387d7',
          500: '#0a2a44',
          600: '#082236',
          700: '#061928',
          800: '#04111a',
          900: '#02080c',
        },
        secondary: {
          50: '#fff5e6',
          100: '#ffebcc',
          200: '#ffd699',
          300: '#ffc266',
          400: '#ffad33',
          500: '#ffcd00',
          600: '#cca400',
          700: '#997b00',
          800: '#665200',
          900: '#332900',
        },
        danger: '#c8102e',
      },
    },
  },
  plugins: [],
}