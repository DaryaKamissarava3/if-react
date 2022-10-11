import React, {useState} from 'react';
import './form.css';
import DestinationInput from '../Inputs/DestinationInput/index.js';
import DatesInput from '../Inputs/DatesInput/index.js';
import GuestsInput from '../Inputs/GuestsInput/index.js';

const FormFetch = ({updateStatus, updateData}) => {
  const [destinationValue, setDestinationValue] = useState('');

  const getData = async () => {
    const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${destinationValue}`)
    return response.json();
  }

  const handleInput = (event) => {
    setDestinationValue(event.target.value);
  };

  const handleClick = async () => {
    const resultArrOfHotels = await getData();
    if (resultArrOfHotels.length === 0) {
      alert('nothing was found');
      return;
    }
    updateStatus((prevState) => !prevState);
    updateData(resultArrOfHotels);
  };

  return (
    <article className="form-container col-lg-12 col-12">
      <form action="/" method="get">
        <div className="row-form">
          <DestinationInput onChange={handleInput}/>
          <DatesInput/>
          <GuestsInput/>
          <button
            type="submit"
            id="search-btn"
            className="col-button button-text col-lg-12 col-12"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </form>

    </article>
  );
}

export default FormFetch;