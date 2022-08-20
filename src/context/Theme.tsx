import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect
} from 'react'

import { darkTheme } from '../styles/theme'

interface Props {
  children: ReactNode
}

interface ContextData {
  darkThemeEnabled: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ContextData>({} as ContextData)
const collectionName = '@todo:darkTheme'

export function ThemeProvider({ children }: Props) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const retrivedTheme = localStorage.getItem(collectionName)

    if (retrivedTheme !== null) return JSON.parse(retrivedTheme)

    return false
  })

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((currentState) => !currentState)
  }, [])

  useEffect(() => {
    localStorage.setItem(collectionName, JSON.stringify(isDarkTheme))
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, darkThemeEnabled: isDarkTheme }}
    >
      <div id="body" className={isDarkTheme ? darkTheme : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme(): ContextData {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within an ThemeProvider.')
  }

  return context
}
