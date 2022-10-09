import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Picture from "../HomesGuestsLoves/Picture";

const Hotel = (hotelId) => {
  const [arrOfHotelDetails,setArrOfHotelsDetails]=useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${params.hotelId}`)
      .then((response)=>{
        console.log(response);
      })
  })

  return (
    <div>
      <Picture
        imageUrl={params.imageUrl}
        name={params.name}
      />
      <div className="card-hostel-name">{params.name}</div>
      <div className="card-hostel-location">
        {params.city},
        <span className="card-hostel-country">
          {params.country}
        </span>
      </div>
    </div>
  )
};

export default Hotel;