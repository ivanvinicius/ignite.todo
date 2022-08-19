import { globalCss } from './theme'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`
  },
  body: {
    backgroundColor: '$surface',
    color: '$text'
  }
})
