import { globalStyles } from './styles/global'
import { AppContext } from './context'
import { Todo } from './pages/Todo'

globalStyles()

export function App() {
  return (
    <AppContext>
      <Todo />
    </AppContext>
  )
}
