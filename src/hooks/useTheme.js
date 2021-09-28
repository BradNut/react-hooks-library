import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    // Removing all class names on body before setting, could keep and only remove what we want
    document.body.className = "";
    document.body.classList.add(theme);
  }, [theme]);

  return [theme, setTheme];
}