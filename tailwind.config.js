module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          100: '#D1D5DB', 
        },
        secondary: {
          100: '#F5F5F5',
        },
      },
      colors: {
        dark: {
          100: '#2B283A',
          200: '#4A4E74',
        },
        white: '#FFFFFF',
      },
      spacing: {
        85: '21.25rem',
      },
    },
  },
  plugins: [],
};
