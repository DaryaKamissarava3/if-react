import React, { useRef } from 'react';
import '../../assets/styles/Intro/InputDestination.css';

function InputDestination() {
  const inputRef = useRef(null);

  function handleChange() {
    const destinationValue = inputRef.current.value;
    console.log(destinationValue);
  }

  return (
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
      <button type="submit" onClick={handleChange}>Отправить</button>
    </div>

  );
}

export default InputDestination;