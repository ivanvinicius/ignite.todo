import { styled } from '../../styles/theme'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  padding: '3rem 2rem'
})

export const Box = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '46rem'
})

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',

  svg: {
    fontSize: '2.5rem'
  },
  h1: {
    fontSize: '2.5rem'
  },
  span: {
    color: '$heaven'
  }
})

export const ButtonTheme = styled('button', {
  padding: '$8',
  lineHeight: 0,
  borderRadius: '$2',
  background: 'none',
  cursor: 'pointer',
  border: 'none',
  transition: 'background .3s',

  svg: {
    color: '$text',
    fontSize: '$24'
  },

  '&:hover': {
    background: '$description'
  }
})
