import React, { FunctionComponent } from 'react';

// Styles
import './Header.scss';

const Header: FunctionComponent = () => {
  return (
    <div className="nav">
      <div className="header">
        <img src="logo192.png" className="logo" />
        <h1 className="title">Hello Casemicer 👋</h1>
      </div>
    </div>
  );
};

export default Header;
