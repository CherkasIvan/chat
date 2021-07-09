import React from 'react';
import useDarkMode from 'use-dark-mode';

import Toggle from '../Toggle';

const DarkModeToggle = () => {
  const darkMode = useDarkMode(true);

  return (
    <div>
      <Toggle onClick={darkMode.enable} checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkModeToggle;