import React, { useState } from 'react';

function Button(props) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(true);
  }

  return (
    <button
      id={props.id}
      className={props.class}
      onClick={props.onClick}
      type="submit"
    >
      {props.text}
    </button>
  );
}

export default Button;