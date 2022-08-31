import React from 'react';

function DestinationInput() {
  return (
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
  );
}

export default DestinationInput;