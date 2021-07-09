import React from 'react';
import {Link} from "react-router-dom";
import {Input} from "./HeaderStyled";

const Header = ({children}) => {
  return (
    <div>
      <header className="container-movie">
        <div className="header__container">
          <Link to='index.html' className="header__logo">Movie App</Link>
          {children}
          <form>
            <Input type="text" className="header__search" placeholder="Search"/>
          </form>
        </div>
      </header>
    </div>
  );
};

export default Header;