import React from 'react';
import '../../assets/styles/HomesGuestsLoves/picture.css';

function Picture(props) {
  return (
    <img
      className="card-img homes-guests col-s-12"
      src={props.imageUrl}
      alt={props.name}
    />
  );
}

export default Picture;