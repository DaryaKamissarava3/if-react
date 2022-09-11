import React from 'react';
import Picture from './Picture';
import '../../assets/styles/HomesGuestsLoves/cardItem.css';

function CardItem(props) {
  return (
    <div className="card-item">
      <Picture
        imageUrl={props.imageUrl}
        name={props.name}
      />
      <div className="card-hostel-name">{props.name}</div>
      <div className="card-hostel-location">
        {props.city},
        <span className="card-hostel-country">
          {props.country}
        </span>
      </div>
    </div>
  );
}

export default CardItem;