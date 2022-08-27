import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...rest }: Props) {
  return <Container {...rest}>{children}</Container>
}
