import React from 'react';
import CardItem from '../HomesGuestsLoves/CardItem';
import '../../assets/styles/HomesGuestsLoves/cardItem.css';

function AvailableHotels(props) {
  return (
    <section className={props.isActive ? 'section available-hotels' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">Available Hotels</h2>
        </div>
        <div className="card">
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
    </section>
  );
}

export default AvailableHotels;