import React, { createContext, useState, useContext, useEffect } from 'react';

// Theme context
const ThemeContext = createContext();

// Theme provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default to 'light' theme

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use ThemeContext
export const useTheme = () => useContext(ThemeContext);
