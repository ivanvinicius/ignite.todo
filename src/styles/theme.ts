import { createStitches, createTheme } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      surface: '#FFFFFF',
      text: '#141414'
    }
  }
})

export const darkTheme = createTheme({
  colors: {
    surface: '#141414',
    text: '#FFFFFF'
  }
})
