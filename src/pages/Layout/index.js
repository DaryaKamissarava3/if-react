import React from 'react';
import Header from '../../components/Header/index.js';
import Footer from '../../components/Footer/index.js';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;