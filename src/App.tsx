import { globalStyles } from './styles/global'
import { AppContext } from './context'
import { Header } from './components/Header'

globalStyles()

export function App() {
  return (
    <AppContext>
      <Header />
    </AppContext>
  )
}
