import React from 'react';
import Picture from '../Picture/index.js';
import './cardItem.css';

const CardItem = ({ imageUrl, name, city, country }) => {
  return (
    <div className="card-item">
      <Picture
        imageUrl={imageUrl}
        name={name}
      />
      <div className="card-hostel-name">{name}</div>
      <div className="card-hostel-location">
        {city},
        <span className="card-hostel-country">
          {country}
        </span>
      </div>
    </div>
  );
};

export default CardItem;