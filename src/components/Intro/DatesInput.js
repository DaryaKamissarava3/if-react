import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DestinationInput() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const handleOnBlur = ({ target: { value } }) => {
    const date = new Date(value);
    console.log('value: %s', date);
  };
  return (

    <div className="input-date-check">
      <div className="label-date-first">
        <DatePicker
          id="check-in"
          className="col-date col-lg-12 col-12"
          key="example9"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          onBlur={handleOnBlur}
          placeholderText="Check-in"
        />
      </div>
      <div className="label-date-second">
        <DatePicker
          id="check-out"
          className="col-date col-lg-12 col-12"
          key="example9"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          onBlur={handleOnBlur}
          placeholderText="Check-out"
        />
      </div>
    </div>
  );
}

export default DestinationInput;