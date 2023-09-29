/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: true,
  content: [
    './src/**/*.{html,ts,css,js,jsx,tsx}',
    
  ],
  theme: {
    colors: {
      'accent': '#825574',
      'alt-accent': '#cfb0c5',
      'bg-color': '#fff4e0',
      'btn-text': '#f3f3c7',
      'dark-green': '#8dac87',
      'light-green': '#b4cfb0c4',
      'logo-color': '#263330',
      'text-color': '#384541',
    },
    extend: {
      borderRadius: {
        'br-main': '20px',
    },
      boxShadow: {
        'box-shadow': '0 0 20px #384541',
      }
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('daisyui')],
}
}

