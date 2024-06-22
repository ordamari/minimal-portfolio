import { useCallback, useEffect, useRef } from 'react'

function useTimeout() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const clear = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const set = useCallback((fn: () => void, ms: number) => {
    timeoutRef.current = setTimeout(fn, ms)
  }, [])

  useEffect(() => {
    return () => {
      clear()
    }
  }, [])

  return [set, clear] as const
}

export default useTimeout
