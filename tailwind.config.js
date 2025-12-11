/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium Black & Green Color System
        'brand': {
          'bg': '#0F0F0F',           // Primary background
          'surface': '#1A1A1A',      // Cards, sections, elevated surfaces
          'border': '#2A2A2A',       // Subtle borders
        },
        'premium': {
          'green': '#10B981',        // Primary green (Emerald-500)
          'green-light': '#34D399',  // Secondary green (Emerald-400)
          'green-dark': '#059669',   // Darker green (Emerald-600)
          'green-glow': 'rgba(16, 185, 129, 0.3)', // Glow effects
        },
        'text': {
          'primary': '#F9FAFB',      // Primary text (Gray-50)
          'secondary': '#9CA3AF',    // Muted text (Gray-400)
          'tertiary': '#6B7280',     // Disabled text (Gray-500)
        },
        // Legacy support - map to new system
        cyber: {
          green: '#10B981',
          black: '#0F0F0F',
          gray: '#1A1A1A',
          dark: '#0F0F0F',
        },
        // Override Tailwind defaults with our green
        'green': {
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'accent': ['Montserrat', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'], // Futuristic font option
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'fill-left': 'fill-left 0.4s ease-out forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 0.75s step-end infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)'
          },
          '50%': {
            opacity: '.85',
            boxShadow: '0 0 30px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.2)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'fill-left': {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'fade-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#10B981' }
        }
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent, rgba(16, 185, 129, 0.3), transparent)',
        'premium-gradient': 'linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)',
        'green-gradient': 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
        'green-glow': 'radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'green': '0 0 20px rgba(16, 185, 129, 0.3)',
        'green-lg': '0 0 30px rgba(16, 185, 129, 0.4)',
        'green-xl': '0 0 40px rgba(16, 185, 129, 0.5)',
        'premium': '0 10px 40px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}