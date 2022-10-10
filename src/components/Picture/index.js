import React from 'react';
import './picture.css';

const Picture = ({ imageUrl, name }) => {
  return (
    <img
      className="card-img homes-guests col-s-12"
      src={imageUrl}
      alt={name}
    />
  );
};

export default Picture;