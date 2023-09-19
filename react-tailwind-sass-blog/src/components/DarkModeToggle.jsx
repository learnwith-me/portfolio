import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);

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
      <button id="toggleDark" className=' fixed md:top-[20px] bottom-[5px] md:bottom-[unset] right-[10px] md:right-[20px]' onClick={toggleDarkMode}>
        {isDarkMode ? (
          <div className=" dark:text-white">
            <span className="sun-icon text-[30px]">☀️</span> 
          </div>
        ) : (
          <>
            <span className="moon-icon text-[30px]">🌚</span>
          </>
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
