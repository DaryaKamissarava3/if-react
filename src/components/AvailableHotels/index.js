import React from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../CardItem';
import '../CardItem/cardItem.css';

const AvailableHotels = ({ isActive, foundHotels }) => {
  return (
    <section className={isActive ? 'section available-hotels' : 'hide'}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle underline">Available Hotels</h2>
        </div>
        <div className="card">
          {foundHotels.map((item) =>
            (
              <Link to={`/hotels/${item.id}`} key={item.id}>
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
};

export default AvailableHotels;