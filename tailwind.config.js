/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'action-btn': '#dcd2bf',
      'action-btn-hover': '#dbcaa9',
    },
    extend: {
      borderRadius: {
        'br-main': '20px',
    },
      boxShadow: {
        'box-shadow': '0 0 2px #384541',
        'image-shadow': '3px 3px 7px #cfb0c5',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [require('daisyui')],
},
  daisyui: {
    themes: ["light"],
  },
}

