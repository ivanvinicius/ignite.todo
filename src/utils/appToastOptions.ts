import { ToastOptions } from 'react-hot-toast'

export const appToastOptions = {
  style: { color: '#EBEBEB' },
  success: {
    style: {
      background: '#007BFF'
    }
  },
  error: {
    style: {
      background: '#FF605C'
    }
  }
} as ToastOptions
