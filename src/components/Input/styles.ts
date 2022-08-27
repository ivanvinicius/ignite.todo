import { styled } from '../../styles/theme'

export const Container = styled('input', {
  width: '100%',
  height: '3.375rem',
  padding: '$16',
  border: '1px solid $stroke',
  color: '$text',
  fontSize: '$16',
  background: '$surfacePrimary',
  borderRadius: '$8',
  marginRight: '$16',

  '&::placeholder': {
    color: '$description'
  }
})
