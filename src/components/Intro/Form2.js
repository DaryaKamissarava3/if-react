import React, {useState} from 'react';
import '../../assets/styles/Intro/Form.css';
import data from "../../constants/arrays/Hotels";
import DestinationInput from "./DestinationInput";
import DatesInput from "./DatesInput";
import GuestsInput from "./GuestsInput";

function Form(props) {
  const [destination, setDestination] = useState('');

  const handleInput = event => {
    setDestination(event.target.value);
    console.log('value is:', event.target.value);
  }

  const handleClick = () => {
    const resultArrOfHotels = filterArray(destination);
    console.log(resultArrOfHotels);
    if (resultArrOfHotels.length === 0) {
      alert('nothing was found');
      return;
    }
    props.updateData(resultArrOfHotels)
  };

  const filterArray = (value) => {
    value = value.toString().toLowerCase();
    return data.filter(function (o) {
      return Object.keys(o).some(function (k) {
        return o[k].toString().toLowerCase().indexOf(value) !== -1;
      });
    });
  };

  return (
    <>
      <article className="form-container col-lg-12 col-12">
        <form action="/" method="get">
          <div className="row-form">
            <DestinationInput onChange={handleInput}/>
            <DatesInput/>
            <GuestsInput/>
            <button id="search-btn" className="col-button button-text col-lg-12 col-12"
                    onClick={handleClick}>
              Search
            </button>
          </div>
        </form>
      </article>
    </>
  );
}


export default Form;