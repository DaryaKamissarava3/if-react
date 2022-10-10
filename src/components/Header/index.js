import React from 'react';
import HeaderInner from './HeaderInner/index.js';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <HeaderInner />
      </div>
    </header>
  );
};

export default Header;