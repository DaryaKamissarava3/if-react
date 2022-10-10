import React from 'react';
import Navigation from '../../Navigation/index.js';
import Logo from '../../../assets/images/TopSection/logo.svg';

const HeaderInner = () => {
  return (
    <div className="header-inner">
      <div className="header-logo col-2 col-s-4">
        <img
          className="header-logo-img"
          src={Logo}
          alt="It is the logo of site"
        />
      </div>
      <Navigation />
    </div>
  );
};

export default HeaderInner;