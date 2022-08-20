import { ReactNode } from 'react'

import { ThemeProvider } from './Theme'

interface Props {
  children: ReactNode
}

export function AppContext({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>
}
