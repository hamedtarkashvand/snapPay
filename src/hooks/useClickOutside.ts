import { useEffect } from 'react';

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  outSideCallback: () => void
) => {
  useEffect(() => {
    if (!ref.current) return;

    function handleClickOutside(event: any) {
      if (ref?.current && !ref?.current?.contains(event.target)) {
        outSideCallback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, outSideCallback]);
};
export default useClickOutside;