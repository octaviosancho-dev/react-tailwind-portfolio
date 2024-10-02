module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1450px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        'body': '#202023',
        'purple': '#4957D2',
        'title': '#7863FE',
        'input': '#202023',
        'input-border': '#5F6177',
        'text': '#EDEDED',
        'light-text': '#8a92d4'
      },
      screens: {
        'laptop': '1100px',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
      }
    },
  },
}
