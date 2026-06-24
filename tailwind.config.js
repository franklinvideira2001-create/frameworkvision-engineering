module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1633',
        secondary: '#102B63',
        accent: '#F5B942',
        background: '#F8FAFC',
        'text-light': '#FFFFFF',
        'text-dark': '#0F172A'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } }
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.1)',
        premium: '0 20px 60px rgba(0, 0, 0, 0.15)',
        card: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }
    }
  },
  plugins: []
};
