import React, { useRef } from 'react';
import '../../assets/styles/Intro/Form.css';
import Button from './Button';
import data from '../../constants/arrays/Hotels';

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    const destinationValue = inputRef.current.value;
    console.log(destinationValue);

    function search(array, value) {
      const str = value.toString().toLowerCase();
      return array.filter(function (o) {
        return Object.keys(o).some(function (k) {
          return o[k].toString().toLowerCase().indexOf(str) !== -1;
        });
      });
    }
    console.log(search(data, destinationValue));
  }

  return (
    <article className="form-container col-lg-12 col-12">
      <form action="/" method="post">
        <div className="row-form">
          <div className="input-destination">
            <input
              id="destination"
              type="text"
              name="place"
              className="col-destination col-lg-12 col-12"
              ref={inputRef}
              required
            />
            <label
              className="label-destination"
              htmlFor="destination"
            >
              Your destination or hotel name
            </label>
          </div>

          <div className="input-date-check">
            <div className="label-date-first">
              <input
                id="check-in"
                type="text"
                className="col-date col-lg-12 col-12"
                required
              />
              <label className="label-date" htmlFor="check-in">Check-in</label>
            </div>
            <div className="label-date-second">
              <input
                id="check-out"
                type="text"
                className="col-date col-lg-12 col-12"
                required
              />
              <label className="label-date" htmlFor="check-out">Check-out</label>
            </div>
          </div>
          <input
            id="count-guests"
            type="text"
            name="guests"
            className="col-guests col-lg-12 col-12"
            required
          />
          <label id="label-guests" className="label-guests" htmlFor="count-guests">
            2 Adults &#8212; 0 Children &#8212; 1 Room
          </label>
          <Button
            id="search-btn"
            class="col-button button-text col-lg-12 col-12"
            onClick={handleClick}
            text="Search"
          />
        </div>
      </form>
    </article>
  );
}

export default Form;