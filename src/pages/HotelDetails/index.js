import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Picture from '../../components/Picture/index.js';
import '../../assets/styles/loader.css';

const HotelDetails = () => {
  const [arrOfHotelDetails, setArrOfHotelsDetails] = useState({});
  const [isLoad, setIsLoad] = useState(false);
  const params = useParams();

  useEffect(() => {
    setIsLoad(true);
    fetch(`https://fe-student-api.herokuapp.com/api/hotels/${params.hotelId}`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        setArrOfHotelsDetails(data);
      }).catch(() => setIsLoad(false));
  }, []);

  return (
    <>
      {
        isLoad ? (
          <section className="hotel-details">
            <Picture
              imageUrl={arrOfHotelDetails.imageUrl}
              name={arrOfHotelDetails.name}
            />
            <div className="card-hostel-name">{arrOfHotelDetails.name}</div>
            <div className="card-hostel-location">
              {arrOfHotelDetails.city},
              <span className="card-hostel-country">
                {arrOfHotelDetails.country}
              </span>
            </div>
          </section>
        ) : <div className="loader" />
      }
    </>
  );
};

export default HotelDetails;