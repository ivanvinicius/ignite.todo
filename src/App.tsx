import { ToastContainer, ToastPosition } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { useMatchMedia } from './hooks/useMatchMedia'
import { globalStyles } from './styles/global'
import { AppContext } from './context'
import { Todo } from './pages/Todo'

globalStyles()

export function App() {
  const isMobileMedia = useMatchMedia({ type: 'max', width: 768 })
  const toastPosition: ToastPosition = isMobileMedia
    ? 'bottom-center'
    : 'top-right'

  return (
    <AppContext>
      <ToastContainer
        position={toastPosition}
        autoClose={3000}
        newestOnTop
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
      <Todo />
    </AppContext>
  )
}
