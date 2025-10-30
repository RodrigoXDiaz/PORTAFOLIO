/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        lg: '3rem',
        xl: '4rem'
      },
      screens: {
        '2xl': '1280px'
      }
    },
    extend: {
      colors: {
        midnight: '#05030d',
        surface: '#0f0a1f',
        surfaceAlt: '#1a1033',
        accent: '#a855f7',
        accentSoft: '#c084fc',
        ivory: '#f5f3ff'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(168,85,247,0.25), transparent 55%), radial-gradient(circle at bottom right, rgba(10,5,20,0.6), transparent 60%)',
        'card-gradient': 'linear-gradient(140deg, rgba(15,10,31,0.95), rgba(26,16,51,0.88))'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        soft: '0 25px 60px -25px rgba(10, 5, 25, 0.55)',
        glow: '0 0 0 1px rgba(192, 132, 252, 0.35), 0 24px 60px -30px rgba(10, 5, 35, 0.6)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0px)' }
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', opacity: 0.45 },
          '80%, 100%': { transform: 'scale(1.35)', opacity: 0 }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        fadeUp: 'fadeUp 600ms ease forwards',
        pulseRing: 'pulseRing 2.8s ease-out infinite'
      }
    }
  },
  plugins: []
}

