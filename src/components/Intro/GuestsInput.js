import React, {useState} from 'react';
import Modal from './Modal';

function DestinationInput() {
  const [modalActive, setModalActive] = useState(false);
  const [countAdults, setCountAdults] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [countRooms, setCountRooms] = useState(0);

  const plusCountAdults = () => {
    if (countAdults < 30) {
      setCountAdults(countAdults + 1);
    }
  };

  const minusCountAdults = () => {
    if (countAdults > 0) {
      setCountAdults(countAdults - 1);
    }
  };
  const plusCountChildren = () => {
    if (countChildren === 0) {
      setCountChildren(countChildren + 1);
      const modulePopup = document.querySelector('.popup');
      const newDivWithText = document.createElement('div');

      const newDivText = document.createTextNode(
        "What is the age of the child you're travelling with ?"
      );
      newDivWithText.className = 'popup-text-block';
      newDivWithText.id = 'text-block';

      newDivWithText.appendChild(newDivText);
      modulePopup.appendChild(newDivWithText);
      addSelect();
    }
    else if (countChildren < 10) {
      setCountChildren(countChildren + 1);
      addSelect();
    }
  };

  const minusCountChildren = () => {
    if (countChildren > 0) {
      setCountChildren(countChildren - 1);
      let deleteSelect = document.querySelectorAll('.div-for-select');
      let deleteText = document.getElementById('text-block');
      let lengthOfSelectedDivs = deleteSelect.length;
      if (lengthOfSelectedDivs > 1) {
        deleteSelect[0].parentNode.removeChild(deleteSelect[0]);
      } else {
        deleteSelect[0].parentNode.removeChild(deleteSelect[0]);
        deleteText.remove();

      }
    }
  };

  const plusCountRooms = () => {
    if (countRooms < 30) {
      setCountRooms(countRooms + 1);
    }
  };

  const minusCountRooms = () => {
    if (countRooms > 0) {
      setCountRooms(countRooms - 1);
    }
  };

  function addSelect() {
    let divWithText = document.querySelector('.popup-text-block');
    let divForSelect = document.createElement('div');
    divForSelect.className = 'div-for-select';
    divForSelect.id = 'id-div-for-select';
    let array = [
      '1 years old',
      '2 years old',
      '3 years old',
      '4 years old',
      '5 years old',
      '6 years old',
      '7 years old',
      '8 years old',
      '9 years old',
      '10 years old',
      '11 years old',
      '12 years old',
      '13 years old',
      '14 years old',
      '15 years old',
      '16 years old',
      '17 years old',
    ];
    const selectList = document.createElement('select');
    selectList.id = 'mySelect';
    selectList.className = 'popup-children-select';
    divWithText.appendChild(divForSelect);
    divForSelect.append(selectList);

    for (let i = 0; i < array.length; i++) {
      const option = document.createElement('option');
      option.value = array[i];
      option.text = array[i];
      selectList.appendChild(option);
    }
  }

  return (
    <>
      <input
        onClick={() => setModalActive(true)}
        id="count-guests"
        type="text"
        name="guests"
        className="col-guests col-lg-12 col-12"
        required
      />
      <label
        id="label-guests"
        className="label-guests"
        htmlFor="count-guests"
      >
        2 Adults &#8212; 0 Children &#8212; 1 Room
      </label>
      <Modal active={modalActive} setActive={setModalActive}>
        <div id="popup" className="popup">
          <div className="popup-counter">
            <span className="popup-inscription">Adults</span>
            <span className="popup-content-buttons">
            <button
              id="min-adults"
              className="counter-btn-adults"
              onClick={minusCountAdults}
            >-
            </button>
            <input
              id="adults-inp"
              type="text"
              value={countAdults}
              className="counter-value-adults"
            />
            <button
              id="plus-adults"
              className="counter-btn-adults"
              onClick={plusCountAdults}
            >+
            </button>
          </span>
          </div>
          <div className="popup-counter counter-children">
            <span className="popup-inscription">Children</span>
            <span className="popup-content-buttons">
            <button className="children-btn children-min" data-direction="minus"
                    onClick={minusCountChildren}>-</button>
            <input type="text" value={countChildren} className="children-value"/>
            <button className="children-btn children-plus" data-direction="plus"
                    onClick={plusCountChildren}>+</button>
          </span>
          </div>
          <div className="popup-counter">
            <span className="popup-inscription">Room</span>
            <span className="popup-content-buttons">
            <button className="counter-btn-rooms" data-direction="minus"
                    onClick={minusCountRooms}>-</button>
            <input type="text" value={countRooms} className="counter-value-rooms"/>
            <button className="counter-btn-rooms" data-direction="plusRoom"
                    onClick={plusCountRooms}>+</button>
          </span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default DestinationInput;