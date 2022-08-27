import { styled } from '../../styles/theme'

export const Container = styled('button', {
  display: 'flex',
  alignItems: 'center',
  height: '3.375rem',
  padding: '$16',
  gap: '$4',
  border: 0,
  borderRadius: '$8',
  fontSize: '$16',
  lineHeight: 0,
  background: '$heaven',
  color: '$textInHeaven',
  cursor: 'pointer',
  transition: 'background .3s',

  svg: {
    width: '1.25rem',
    height: '1.25rem'
  },

  '&:hover': {
    background: '$heavenDark'
  },
  '&:focus': {
    outline: '2px solid $textInHeaven'
  }
})
