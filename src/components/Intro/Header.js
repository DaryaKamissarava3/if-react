import React from 'react';
import HeaderInner from './HeaderInner';
import '../../assets/styles/Intro/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <HeaderInner />
      </div>
    </header>
  );
}

export default Header;
