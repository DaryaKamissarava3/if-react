import React from 'react';

function Button(props) {
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