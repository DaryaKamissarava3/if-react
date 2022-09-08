import React, {useState} from 'react';
import Modal from "./Modal";


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
    if (countChildren < 10) {
      setCountChildren(countChildren + 1);
    }
  };

  const minusCountChildren = () => {
    if (countChildren > 0) {
      setCountChildren(countChildren - 1);
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
        <div className="popup-counter">
          <span className="popup-inscription">Adults</span>
          <span className="popup-content-buttons">
            <button
              id="min-adults"
              className="counter-btn-adults"
              onClick={minusCountAdults}
            >-
            </button>
            <input id="adults-inp" type="text" value={countAdults} className="counter-value-adults"/>
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
      </Modal>
    </>
  );
}

export default DestinationInput;