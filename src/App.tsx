import { lightTheme } from './styles/theme'
import { globalStyles } from './styles/global'

globalStyles()

export function App() {
  return (
    <div className={lightTheme}>
      <h2>Hello World!</h2>
    </div>
  )
}
