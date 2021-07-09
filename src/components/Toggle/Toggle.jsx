import React from 'react'
import { func, string } from 'prop-types';
import { Sun, Moon } from '../../assets';
import {ToggleContainer} from "./ToggleStyled";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme}>
      <Sun/>
      <Moon/>
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;