import React from 'react';
import {useParams} from "react-router-dom";
import Picture from "../HomesGuestsLoves/Picture";

const Hotel = (foundHotels) => {
  const {id} = useParams();
  const hotel = foundHotels.find((item) => item.id === Number(id));
  const {imageUrl, name, city, country} = hotel;
  return (
    <div>
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
  )
};

export default Hotel;