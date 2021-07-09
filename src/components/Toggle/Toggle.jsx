import React from 'react'
import {func, string} from 'prop-types'
import {Button} from "./TogglerStyled";

const Toggle = ({theme, toggleTheme}) => {
  return (
    <Button onClick={toggleTheme} className='btn btn-info'>switch theme</Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;