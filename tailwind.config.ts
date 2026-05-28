import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        background: '#050505',
        foreground: '#F5F5F5',
        accent: {
          DEFAULT: '#4A90E2',
          foreground: '#F5F5F5',
        },
        muted: {
          DEFAULT: '#737373',
          foreground: '#A3A3A3',
        },
        border: '#1F1F1F',
        card: {
          DEFAULT: '#0A0A0A',
          foreground: '#F5F5F5',
        },
        input: '#1F1F1F',
        ring: '#4A90E2',
        destructive: { DEFAULT: '#ef4444', foreground: '#F5F5F5' },
      },
      borderRadius: {
        lg: '0.25rem',
        md: '0.25rem',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
