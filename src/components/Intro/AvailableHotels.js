import React from 'react';

function AvailableHotels({city,imgUrl,name,country}) {
  return (
    <div>
      <div>
        <img className="ddd" src={imgUrl} alt={name} />
      </div>
      <a href="#" >{name}</a>
      <span>{city},{country}</span>
    </div>
  );
}

export default AvailableHotels;