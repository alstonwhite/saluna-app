import React from 'react';

import logo from '../saluna-logo.png';

import MenuContent from './MenuContent';


const Menu = ({menu}) => {
  return (
    <div className="main-wrapper" id="main">
      <div className="header-wrapper">
        <img src={logo} className="header-logo" alt="logo" />
        <div className="header-title">
          <p className="header-title">Soluna Bar</p>
          <p className="header-subtitle">On Lake Burton</p>
        </div>
      </div>
      <MenuContent
        menu={menu}
      />
      <div className="footer-wrapper">
      </div>
    </div>
  );
};

export default Menu;