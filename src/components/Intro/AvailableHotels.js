import React from 'react';
import CardItem from '../HomesGuestsLoves/CardItem';
import '../../assets/styles/HomesGuestsLoves/cardItem.css';
import { Link } from "react-router-dom";
import Hotel from "./Hotel";


function AvailableHotels({isActive,foundHotels}) {
  return (
    <section className={isActive ? 'section available-hotels' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">Available Hotels</h2>
        </div>
        <div className="card">
          {foundHotels.map((item) =>
            (
              <Link to={`/hotels/${item.id}`}>
              <CardItem
                imageUrl={item.imageUrl}
                name={item.name}
                city={item.city}
                country={item.country}
                key={item.id}
              />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );

}

export default AvailableHotels;