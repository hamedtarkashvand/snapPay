import { useRef, useCallback } from "react";

const useDebouncedCallback = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
) => {
  const timeout = useRef<number | undefined>();

  return useCallback(
    (...args: Parameters<T>) => {
      const later = () => {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        func(...args);
      };

      if (timeout.current) {
        clearTimeout(timeout.current);
      }

      timeout.current = window.setTimeout(later, wait);
    },
    [func, wait]
  );
};

export default useDebouncedCallback;
