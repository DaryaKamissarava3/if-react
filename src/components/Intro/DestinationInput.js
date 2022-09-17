import React from 'react';

function DestinationInput({onChange}) {
  return (
    <div className="input-destination">
      <input
        id="destination"
        type="text"
        name="destination"
        onChange={onChange}
        className="col-destination col-lg-12 col-12"
        required
      />
      <label
        className="label-destination"
        htmlFor="destination"
      >
        Your destination or hotel name
      </label>
    </div>
  );
}

export default DestinationInput;