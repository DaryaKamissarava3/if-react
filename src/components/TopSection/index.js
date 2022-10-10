import React from 'react';
import IntroInner from './TopSectionInner/index.js';
import './intro.css';
import Background from '../../assets/images/TopSection/background.svg';

const Intro = ({ updateStatus, updateData }) => {
  return (
    <div className="intro" style={{ backgroundImage: ` url(${Background})` }}>
      <div className="container">
        <IntroInner updateStatus={updateStatus} updateData={updateData} />
      </div>
    </div>
  );
};

export default Intro;