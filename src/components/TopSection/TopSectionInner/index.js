import React from 'react';
import appStore from '../../../assets/images/TopSection/app-store.svg';
import googlePlay from '../../../assets/images/TopSection/google-play.svg';
import FormFetch from '../../Form';

const IntroInner = ({ updateStatus, updateData }) => {
  return (
    <div className="intro-inner">
      <h1 className="intro-title">
        Discover stays<br />
        to live, work or just relax
      </h1>
      <FormFetch updateStatus={updateStatus} updateData={updateData} />
      <div className="download-buttons">
        <button type="button" className="download-button google-play-button">
          <img src={googlePlay} alt="google-play img" />
        </button>
        <button type="button" className="download-button app-store-button">
          <img src={appStore} alt="google-play img" />
        </button>
      </div>
    </div>
  );
};

export default IntroInner;