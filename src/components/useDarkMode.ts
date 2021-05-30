import { useEffect, useState } from 'react';

export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

const useDarkMode = (): [Mode, () => void] => {
  const [theme, setTheme] = useState<Mode>(Mode.Light);

  const setMode = (mode: Mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    theme === Mode.Light ? setMode(Mode.Dark) : setMode(Mode.Light);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Mode;
    localTheme && setTheme(localTheme);
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;
