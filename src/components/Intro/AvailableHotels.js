import React from 'react';
import CardItem from '../HomesGuestsLoves/CardItem';
import '../../assets/styles/HomesGuestsLoves/cardItem.css';
import {BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import Picture from "../HomesGuestsLoves/Picture";
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
      <Router>
        <nav>
          <Link to="/hotels">Hotel</Link>
        </nav>
      </Router>
      <Routes>
        <Route path="/hotels" element={<Hotel foundHotels={foundHotels}  />} />
      </Routes>
    </section>
  );

}

export default AvailableHotels;