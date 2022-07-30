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
        'azo-sans-light': ['AzoSans Light', 'sans-serif'],
        'azo-sans-regular': ['AzoSans Regular', 'sans-serif'],
        'pp-monument-extended-light': [
          'PPMonument Extended Light',
          'sans-serif'
        ],
        'pp-monument-extended-regular': [
          'PPMonument Extended Regular',
          'sans-serif'
        ],
        'pp-monument-extended-heavy': [
          'PPMonument Extended Heavy',
          'sans-serif'
        ]
      },
      colors: {
        blue: {
          deep: '#030D2B',
          soft: '#152352'
        },
        green: {
          soft: '#DEFE7D'
        },
        rarity: {
          'supercar-owners': '#fea280',
          'gold': '#defe7d',
          'silver': '#a8a3e5',
          'bronze': '#cdc7b5',
        },
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
