import { useEffect } from 'react';

export const useBodyBackground = (backgroundColor: string): void => {
  useEffect(() => {
    const originBackground = document.body.style.backgroundColor;
    document.body.style.backgroundColor = backgroundColor;

    return () => {
      document.body.style.backgroundColor = originBackground;
    };
  }, [backgroundColor]);
};
