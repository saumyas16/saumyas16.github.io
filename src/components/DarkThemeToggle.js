import React, { useState } from 'react';

const DarkThemeToggle = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle('dark-theme', !isDarkTheme);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle-button">
      {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
    </button>
  );
};

export default DarkThemeToggle;