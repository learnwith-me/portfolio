import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' // Retrieve mode from local storage
  );

  useEffect(() => {
    // Set the mode in local storage when it changes
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update the class on the document element
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button id="toggleDark" className=' dark:text-white' onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;
