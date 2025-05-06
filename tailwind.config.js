/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f7f3',
          100: '#e7efe7', 
          200: '#bdd9bf',
          300: '#93c397',
          400: '#69ad6f',
          500: '#335145',  // Main primary color
          600: '#2e4940',
          700: '#29413a',
          800: '#243a34',
          900: '#1f322e',
          950: '#1a2b28',
        },
        secondary: {
          50: '#f6f3f3',
          100: '#ede7e7',
          200: '#dccfcf',
          300: '#cbb7b7',
          400: '#ba9f9f',
          500: '#230903',  // Main secondary color
          600: '#200803',
          700: '#1c0702',
          800: '#190602',
          900: '#160502',
          950: '#130401',
        },
        accent: {
          50: '#fcf6f6',
          100: '#f9edec',
          200: '#f3dbda',
          300: '#edc9c7',
          400: '#e7b7b5',
          500: '#BDD9BF',  // Main accent color
          600: '#aac3ac',
          700: '#96ad98',
          800: '#839785',
          900: '#708172',
          950: '#5c6b5f',
        },
        neutral: {
          50: '#f9f6f6',
          100: '#f2edec',
          200: '#e6dbda',
          300: '#d9c9c7',
          400: '#F0E6E1',  // Main neutral color
          500: '#ccb7b5',
          600: '#b8a5a3',
          700: '#a49291',
          800: '#908080',
          900: '#7c6e6e',
          950: '#685c5c',
        },
        light: '#F8F6F6',  // Additional light shade
        brown:'#412908'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};