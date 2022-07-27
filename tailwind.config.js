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
        'title': '#979EDB',
        'input': '#202023',
        'input-border': '#5F6177',
        'text': '#EDEDED',
        'light-text': '#B2B7E1'
      },
      screens: {
        'laptop': '1100px',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      }
    },
  },
}
