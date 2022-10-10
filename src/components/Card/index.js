import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/index.js';
import './card.css';

const Card = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => {
        return response.json();
      }).then((data) => {
        setHotels(data);
      });
  }, []);

  return (
    <div className="card">
      {
        hotels.map((item) =>
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
};

export default Card;