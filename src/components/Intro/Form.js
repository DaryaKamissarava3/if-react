import React, { useState } from 'react';
import '../../assets/styles/Intro/Form.css';
import data from '../../constants/arrays/Hotels';
import DestinationInput from './DestinationInput';
import DatesInput from './DatesInput';
import GuestsInput from './GuestsInput';

function Form(props) {
  const [destination, setDestination] = useState('');

  const handleInput = (event) => {
    setDestination(event.target.value);
  };

  const filterArray = (value) => {
    const string = value.toString().toLowerCase();
    return data.filter(function (o) {
      return Object.keys(o).some(function (k) {
        return o[k].toString().toLowerCase().indexOf(string) !== -1;
      });
    });
  };

  const handleClick = () => {
    const resultArrOfHotels = filterArray(destination);
    const availableHotelsBlock = document.getElementsByClassName('available-hotels')[0];
    if (resultArrOfHotels.length === 0) {
      availableHotelsBlock.classList.add('hide');
      alert('nothing was found');
      return;
    }
    availableHotelsBlock.classList.remove('hide');
    props.updateData(resultArrOfHotels);
  };

  return (
    <article className="form-container col-lg-12 col-12">
      <form action="/" method="get">
        <div className="row-form">
          <DestinationInput onChange={handleInput} />
          <DatesInput />
          <GuestsInput />
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

export default Form;