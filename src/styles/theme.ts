import { createStitches, createTheme } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  media: {
    tablet: '(max-width: 790px)'
  },

  theme: {
    fonts: {
      roboto: 'Roboto, sans-serif'
    },
    fontSizes: {
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem'
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      bold: '700'
    },

    colors: {
      surface: '#E8E8E8',
      surfacePrimary: '#FFFFFF',
      description: '#D2D2D2',
      text: '#181818',
      heaven: '#3089FE',
      danger: '#E74554'
    },

    space: {
      8: '0.5rem',
      16: '1rem',
      32: '2rem',
      64: '4rem'
    },

    radii: {
      2: '2px',
      8: '8px',
      full: '99999px'
    }
  }
})

export const darkTheme = createTheme({
  colors: {
    surface: '#242424',
    surfacePrimary: '#3E3E3E',
    description: '#858585',
    text: '#EBEBEB',
    heaven: '#3089FE',
    danger: '#E74554'
  }
})
