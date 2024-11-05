'use client';
import { Moon, Sun } from 'lucide-react';
import { FunctionComponent, useEffect, useState } from 'react';

const TheThemeButton: FunctionComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Проверка текущей темы при загрузке
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  // Функция для тогла темы
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={
        'ml-auto flex items-center gap-1 p-1 rounded-xl text-black dark:text-white transition-colors duration-200 border border-gray-400 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-700'
      }>
      <span className="p-2">
        {isDarkMode ? <Sun className={'size-4'} /> : <Moon className={'size-4'} />}
      </span>
      {/* <span>{isDarkMode ? 'Light' : 'Dark'} Mode</span> */}
    </button>
  );
};

export default TheThemeButton;
