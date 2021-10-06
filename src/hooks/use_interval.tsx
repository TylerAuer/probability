import { useRef, useEffect } from 'react';

export function useInterval(callback: () => any, delay: number) {
  const intervalRef = useRef<null | number>(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalRef.current!);
    }
  }, [delay]);

  return intervalRef;
}
