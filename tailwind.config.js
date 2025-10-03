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
        // Your brand colors (keeping existing green theme but enhanced)
        primary: {
          navy: '#1a2332',
          green: '#1b4332',
        },
        secondary: {
          gold: '#d4af37',
          cream: '#f5f5dc',
        },
        // Enhanced cyber theme
        cyber: {
          green: '#00ff41',    // Neon green as requested
          black: '#0a0a0a',    // Cyber black as requested
          gray: '#1a1a1a',
          dark: '#0d0d0d',
        },
        // Keep your existing green variants
        'green-400': '#4ade80',
        'green-500': '#22c55e',
        'green-600': '#16a34a',
        // Deep purple tertiary accent
        'deep-purple': {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
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
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)'
          },
          '50%': { 
            opacity: '.8',
            boxShadow: '0 0 30px rgba(0, 255, 65, 0.8), 0 0 40px rgba(0, 255, 65, 0.3)'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backgroundImage: {
        'shimmer': 'linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.4), transparent)',
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #00ff41 100%)',
        'green-gradient': 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
      },
      boxShadow: {
        'cyber': '0 0 20px rgba(0, 255, 65, 0.5)',
        'cyber-lg': '0 0 30px rgba(0, 255, 65, 0.6)',
        'gold': '0 0 20px rgba(212, 175, 55, 0.5)',
      }
    },
  },
  plugins: [],
}