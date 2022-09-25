import React from 'react';
import IntroInner from './IntroInner';
import '../../assets/styles/Intro/intro.css';
import Background from '../../assets/images/intro/background.svg';

function Intro({updateStatus,updateData}) {
  return (
    <div className="intro" style={{ backgroundImage: ` url(${Background})` }}>
      <div className="container">
        <IntroInner updateStatus={updateStatus} updateData={updateData} />
      </div>
    </div>
  );
}

export default Intro;