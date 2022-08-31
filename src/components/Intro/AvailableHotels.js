import React from 'react';
import CardItem from "../HomesGuestsLoves/CardItem";

function AvailableHotels(props) {
  return (
    <div className="available-hotels hide">
      <div>
        {props.foundHotels.map((item) =>
          (
            <CardItem
              imageUrl={item.imageUrl}
              name={item.name}
              city={item.city}
              country={item.country}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
}

export default AvailableHotels;