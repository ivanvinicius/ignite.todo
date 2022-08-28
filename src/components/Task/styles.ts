import { styled } from '../../styles/theme'
import checkSVG from '../../assets/check.svg'

export const Container = styled('div', {
  padding: '$16',
  borderRadius: '$8',
  background: '$surfacePrimary',

  '& + &': {
    marginTop: '$16'
  }
})

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'flex-start'
})

export const Input = styled('input', {
  position: 'absolute',
  opacity: 0, // to keep element focusable
  width: '1.25rem',
  height: '1.25rem',
  cursor: 'pointer'
})

export const Label = styled('label', {
  display: 'flex',
  alignItems: 'flex-start',
  marginRight: '$16',
  cursor: 'pointer',
  lineHeight: '140%',

  'input + &:before': {
    content: '',
    flex: 'none', // to not resize chechbox by multiple lines
    width: '1.25rem',
    height: '1.25rem',
    marginRight: '$16',
    borderRadius: '$2',
    border: '2px solid $heaven'
  },
  'input:hover + &:before': {
    backgroundColor: '$gradientHeaven'
  },
  'input:focus + &:before': {
    backgroundColor: '$gradientHeaven'
  },
  'input:checked + &:before': {
    backgroundColor: '$heaven',
    backgroundImage: `url(${checkSVG})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  'input:checked and input:hover + &:before': {
    border: '2px solid $heavenDark',
    backgroundColor: '$heavenDark'
  },

  variants: {
    isDone: {
      true: {
        color: '$description',
        textDecoration: 'line-through'
      }
    }
  }
})

export const DeleteButton = styled('button', {
  marginLeft: 'auto',
  border: 'none',
  borderRadius: '$2',
  cursor: 'pointer',
  background: 'none',
  lineHeight: 0,
  color: '$description',
  transition: 'color .3s',

  svg: {
    width: '1.25rem',
    height: '1.25rem'
  },

  '&:focus': {
    outline: '2px solid $danger'
  },
  '&:hover': {
    color: '$danger'
  }
})

export const TimeWrapper = styled('div', {
  display: 'flex',
  width: '100%',
  marginTop: '$16',

  time: {
    marginLeft: 'auto',
    fontSize: '$12',
    color: '$description'
  }
})
