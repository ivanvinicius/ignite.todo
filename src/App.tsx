import { Toaster } from 'react-hot-toast'

import { useMatchMedia } from './hooks/useMatchMedia'
import { globalStyles } from './styles/global'
import { AppContext } from './context'
import { Todo } from './pages/Todo'
import { appToastOptions } from './utils/appToastOptions'

export function App() {
  const isMobileMedia = useMatchMedia({ type: 'max', width: 768 })

  return (
    <>
      {globalStyles()}
      <AppContext>
        <Toaster
          position={isMobileMedia ? 'bottom-center' : 'top-right'}
          toastOptions={appToastOptions}
        />
        <Todo />
      </AppContext>
    </>
  )
}
