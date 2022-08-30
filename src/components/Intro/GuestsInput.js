import React from "react";

function DestinationInput() {
  return (
    <>
      <input
        id="count-guests"
        type="text"
        name="guests"
        className="col-guests col-lg-12 col-12"
        required
      />
      <label id="label-guests" className="label-guests" htmlFor="count-guests"
      >2 Adults &#8212; 0 Children &#8212; 1 Room</label
      >
    </>
  );
}

export default DestinationInput;