import React, {useState} from 'react';
import '../../assets/styles/Intro/Form.css';
import AvailableHotels from "./AvailableHotels";
import data from "../../constants/arrays/Hotels";
import DestinationInput from "./DestinationInput";
import DatesInput from "./DatesInput";
import GuestsInput from "./GuestsInput";

function Form() {

  const [isShown, setIsShown] = useState(false);
  const [destination, setDestination] = useState('');

  const handleInput = event  => {
    setDestination(event.target.value);

    console.log('value is:', event.target.value);
  }
  const handleClick = () => {
    setIsShown(true);
    console.log( filterArray(data,destination));
  };

  const filterArray = (array, value) => {
    value = value.toString().toLowerCase();
    return array.filter(function (o) {
      return Object.keys(o).some(function (k) {
        return o[k].toString().toLowerCase().indexOf(value) !== -1;
      });
    });
  };

  return (
    <>
      <article className="form-container col-lg-12 col-12">
        <form action="/" method="post">
          <div className="row-form">
            <DestinationInput  onChange={handleInput}/>
            <DatesInput/>
            <GuestsInput/>
            <button id="search-btn" className="col-button button-text col-lg-12 col-12"
                    onClick={handleClick}>
              Search
            </button>
          </div>
        </form>
      </article>
      <section className="dd">
        {isShown && <Available/>}
      </section>
    </>
  );

}

function Available() {
  return (
    <div className="section available">
      <h2>Available Hotels</h2>
      <div>
        <img />
      </div>
    </div>
  );
}

export default Form;