/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'hcmus-navy': {
          DEFAULT: '#0F2547',
          light: '#1B365D',
        },
        'hcmus-gold': {
          DEFAULT: '#C5A059',
          bright: '#D4AF37',
          pale: '#F3E5AB',
        },
        'paper-cream': {
          DEFAULT: '#FDFBF7',
          dark: '#F7F2E7',
        },
        ink: {
          DEFAULT: '#1E293B',
          soft: '#475569',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
