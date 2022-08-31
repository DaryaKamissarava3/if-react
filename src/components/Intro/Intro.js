import React, {useEffect, useState} from 'react';
import IntroInner from './IntroInner';
import '../../assets/styles/Intro/intro.css';
import Background from '../../assets/images/intro/background.svg';

function Intro(props) {
  const [searchHotels, setSearchHotels] = useState([]);

  return (
    <div className="intro" style={{backgroundImage: ` url(${Background})`}}>
      <div className="container">
        <IntroInner updateData={setSearchHotels} />
      </div>
    </div>
  );
}

export default Intro;