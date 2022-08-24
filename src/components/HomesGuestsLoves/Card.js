import React from 'react';
import CardItem from './CardItem';
import '../../assets/styles/HomesGuestsLoves/card.css';
import data from '../../constants/arrays/Hotels';

function Card() {
  return (
    <div className="card">
      {
        data.map((item) =>
          (
            <CardItem
              imageUrl={item.imageUrl}
              name={item.name}
              city={item.city}
              country={item.country}
              key={item.id}
            />
          ))
      }
    </div>
  );
}

export default Card;