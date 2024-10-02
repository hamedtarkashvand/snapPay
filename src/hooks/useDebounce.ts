import {useEffect, useState} from 'react'

function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const debounceTime: NodeJS.Timeout = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(debounceTime)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
