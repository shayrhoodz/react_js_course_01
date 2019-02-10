import React from 'react';
import './header.css';

const Header = () => {
  return(
    // <div className="d-flex">
      <ul className="header">
        <li className="header__item">
          <a href="#">
            <img src="../img/logo/Logo.svg" alt="logo"/>
          </a>
        </li>
        <li className="header__item">
          <a href="#">Our coffee</a>
        </li>
        <li className="header__item">
          <a href="#">For your pleasure</a>
        </li>
      </ul>
    // </div>
  )
}

export default Header;