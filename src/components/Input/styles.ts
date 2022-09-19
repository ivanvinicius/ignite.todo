import { styled } from '../../styles/theme'

export const Container = styled('input', {
  width: '100%',
  height: '3.375rem',
  padding: '$16',
  color: '$text',
  fontSize: '$16',
  background: '$surfacePrimary',
  border: 'none',
  borderRadius: '$8',

  '&::placeholder': {
    color: '$description'
  },

  variants: {
    hasError: {
      true: {
        outline: '1px solid $danger'
      }
    }
  }
})
