import { useCallback, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as typeof theme;
    const systemTheme = window.matchMedia('(prefers-color-scheme: light)')
      .matches
      ? 'light'
      : 'dark';

    const initialTheme = savedTheme || systemTheme || 'dark';
    setTheme(initialTheme);
    document.body.setAttribute('data-theme', initialTheme);
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (!isInitialized) return;

    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme, isInitialized]);

  const toggleTheme = useCallback(() => {
    setTheme((e) => (e === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'F2') {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener('keyup', handleKey);
    return () => {
      window.removeEventListener('keyup', handleKey);
    };
  }, [toggleTheme]);

  return { theme, setTheme, toggleTheme };
};
