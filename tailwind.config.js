/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#FFF5F5',
          100: '#FFE5E5',
          200: '#FFD1D1',
          300: '#FFB3B3',
          400: '#FF8A8A',
          500: '#FF6B6B',
          600: '#E63946',
          700: '#C92A2A',
          800: '#A61E1E',
          900: '#7A1414',
        },
        'accent': {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 16px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 40px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 32px rgba(255, 107, 107, 0.3)',
      },
      animation: {
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
}
