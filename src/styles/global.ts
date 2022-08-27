import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  ':focus': {
    outline: '2px solid $heaven'
  },

  html: {
    '@tablet': {
      fontSize: '87.5%'
    }
  },

  '#body': {
    WebkitFontSmoothing: 'antialiased',
    minHeight: '100vh',
    backgroundColor: '$surface',
    color: '$text'
  },

  'body, input, button, textarea': {
    fontFamily: '$roboto',
    fontWeight: '$regular'
  }
})
