import { useEffect } from 'react';

export function useOnClickout(ref, callback) {
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClick); // TODO: is mousedown the best choice here?
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, callback]);
}
