import { styled } from '../../styles/theme'

export const Main = styled('main', {
  display: 'flex',
  justifyContent: 'center'
})

export const BoxCenter = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '46rem',
  margin: '$64 $32 0'
})

export const Form = styled('form', {
  width: '100%',
  display: 'flex',
  gap: '$16',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})

export const Details = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 'calc($64 - 1rem)',

  span: {
    display: 'inline-block',
    fontSize: '$14',
    padding: '$8',
    background: '$surfacePrimary',
    borderRadius: '$full'
  }
})

export const TasksContainer = styled('div', {
  marginTop: '$32',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    hasBorderTop: {
      true: {
        borderTop: '1px solid $stroke',
        borderTopLeftRadius: '$8',
        borderTopRightRadius: '$8'
      }
    }
  }
})

export const EmptyTasksMessageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
  marginTop: '$64',
  color: '$description',

  svg: {
    width: '4rem',
    height: '4rem'
  },
  strong: {
    marginTop: '$8',
    lineHeight: '140%'
  },
  span: {
    lineHeight: '140%'
  },

  '@tablet': {
    marginTop: '$32'
  }
})
