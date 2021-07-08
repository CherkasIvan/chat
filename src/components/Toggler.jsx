import React from 'react'
import {func, string} from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  background: ${({theme}) => theme.background};
  border: 2px solid ${({theme}) => theme.toggleBorder};
  color: ${({theme}) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: .8rem;
  padding: .6rem;
  margin: 2rem;
}`;

const Toggle = ({theme, toggleTheme}) => {
  return (
    <Button onClick={toggleTheme} className='btn btn-info'>Switch Theme</Button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;