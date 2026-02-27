/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        md: {
          primary: '#613EEA', // Vibrant Purple
          onPrimary: '#FFFFFF',
          primaryContainer: '#4226BD',
          onPrimaryContainer: '#DED6FF',
          secondary: '#3B82F6', // Blue accent if needed
          onSecondary: '#FFFFFF',
          secondaryContainer: '#1E3A8A',
          onSecondaryContainer: '#DBEAFE',
          surface: '#1A1825', // Dark card background
          onSurface: '#E2E8F0', // General text
          surfaceVariant: '#2D293E', // Secondary background
          onSurfaceVariant: '#94A3B8', // Muted text
          outline: '#3F3C56', // Borders
          background: '#0F0E17', // Main deep dark background
          onBackground: '#F8FAFC',
          error: '#EF4444',
          onError: '#FFFFFF',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
