import { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean
}

export function Input({ hasError, ...rest }: Props) {
  return <Container hasError={hasError} {...rest} />
}
