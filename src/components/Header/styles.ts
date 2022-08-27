import { styled } from '../../styles/theme'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'center'
})

export const BoxCenter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '46rem',
  margin: '$64 $32 0'
})

export const Logo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',

  svg: {
    width: '2.5rem',
    height: '2.5rem',
    marginRight: '$8'
  },
  h1: {
    fontSize: '$40',
    marginRight: '$16'
  },
  span: {
    color: '$heaven'
  }
})

export const ButtonTheme = styled('button', {
  padding: '$4',
  lineHeight: 0,
  borderRadius: '$8',
  background: 'none',
  cursor: 'pointer',
  border: 'none',

  svg: {
    width: '2rem',
    height: '2rem',
    color: '$description',
    transition: 'color .3s'
  },

  '&:hover': {
    svg: {
      color: '$text'
    }
  }
})
