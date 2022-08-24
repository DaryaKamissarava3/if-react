import React from 'react';
import '../../assets/styles/Intro/Form.css';
import Button from './Button';
import InputDestination from './InputDestination';
import InputDateCheck from './InputDateCheck';
import InputGuests from './InputGuests';

function Form() {
  return (
    <article className="form-container col-lg-12 col-12">
      <form action="/" method="post">
        <div className="row-form">
          <InputDestination />
          <InputDateCheck />
          <InputGuests />
          <Button
            id="search-btn"
            class="col-button button-text col-lg-12 col-12"
            text="Search"
          />
        </div>
      </form>
    </article>
  );
}

export default Form;