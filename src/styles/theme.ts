import { createStitches, createTheme } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      surface: '#141414',
      text: '#FFFFFF'
    }
  }
})

export const lightTheme = createTheme('light-theme', {
  colors: {
    surface: '#FFFFFF',
    text: '#141414'
  }
})
