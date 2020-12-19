import React, { FunctionComponent } from 'react';

// Styles
import './Header.scss';

const Header: FunctionComponent = () => {
  return (
    <div className="nav">
      <div className="header">
        <img src="logo192.png" className="logo" />
        <div className="titles">
          <h1>Hello Casemicer 👋</h1>
          <p>Looks like you want to create something great 🤩</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
