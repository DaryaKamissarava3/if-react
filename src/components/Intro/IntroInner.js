import React, {useEffect, useState} from 'react';
import Form from './Form2';
import appStore from '../../assets/images/intro/app-store.svg';
import googlePlay from '../../assets/images/intro/google-play.svg';

function IntroInner(props) {
  const [searchHotels, setSearchHotels] = useState([]);

  return (
    <div className="intro-inner">
      <h1 className="intro-title">
        Discover stays<br />
        to live, work or just relax
      </h1>
      <Form updateData={setSearchHotels} />
      <div className="download-buttons">
        <button className="download-button google-play-button">
          <img src={googlePlay} alt="google-play img"/>
        </button>
        <button className="download-button app-store-button">
          <img src={appStore} alt="google-play img"/>
        </button>
      </div>
    </div>
  );
}

export default IntroInner;