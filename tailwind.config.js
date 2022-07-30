const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.{vue,ts}']
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        display: ['Archivo Expanded', 'sans-serif'],
        'rubik-light': ['Rubik Light', 'sans-serif'],
        'rubik-regular': ['Rubik Regular', 'sans-serif']
      },
      colors: {
        dark: {
          DEFAULT: '#0A0909'
        },
        pink: {
          DEFAULT: '#FF27CF'
        }
      },
      borderWidth: {
        1: '1px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()'
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`
        })
      })
    })
  ]
}
