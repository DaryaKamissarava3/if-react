import React, {useCallback, useEffect, useState} from 'react';
import '../../assets/styles/Intro/Form.css';
import DestinationInput from './DestinationInput';
import DatesInput from './DatesInput';
import GuestsInput from './GuestsInput';

function FormFetch(props) {
  const [destinationValue, setDestinationValue] = useState('');
  const [dataFetch, setDataFetch] = useState([]);

  const getData = useCallback(() => {
    fetch(`https://fe-student-api.herokuapp.com/api/hotels?search=${destinationValue}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setDataFetch(res)
      })
  })

  useEffect(() => {
    getData()
  }, [destinationValue])

  const handleInput = (event) => {
    setDestinationValue(event.target.value);
  };

  const handleClick = () => {
    const resultArrOfHotels = dataFetch;
    const availableBlock = document.getElementsByClassName('available-hotels')[0];
    if (resultArrOfHotels.length === 0) {
      availableBlock.classList.add('hide');
      alert('nothing was found');
      return;
    }
    availableBlock.classList.remove('hide');
    props.updateData(resultArrOfHotels);
  };

  return (
    <article className="form-container col-lg-12 col-12">
      <form action="/" method="get">
        <div className="row-form">
          <DestinationInput onChange={handleInput}/>
          <DatesInput/>
          <GuestsInput/>
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

export default FormFetch;
