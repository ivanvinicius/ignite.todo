import { useEffect, useState } from 'react'

interface Props {
  width: number
  type: 'max' | 'min'
}

function useMatchMedia({ type, width }: Props): boolean {
  const [isMatched, setIsMatched] = useState(false)

  useEffect(() => {
    function listener({ matches }: MediaQueryListEvent) {
      setIsMatched(matches)
    }

    const matchMedia = window.matchMedia(`(${type}-width: ${String(width)}px)`)

    setIsMatched(matchMedia.matches)

    try {
      matchMedia.addEventListener('change', listener)

      return () => matchMedia.removeEventListener('change', listener)
    } catch (_error) {
      matchMedia.addEventListener('change', listener)

      return () => matchMedia.removeEventListener('change', listener)
    }
  }, [type, width])

  return isMatched
}

export { useMatchMedia }
