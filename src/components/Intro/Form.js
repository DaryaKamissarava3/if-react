import React, {useState} from 'react';
import '../../assets/styles/Intro/Form.css';
import AvailableHotels from "./AvailableHotels";
import data from "../../constants/arrays/Hotels";
import DestinationInput from "./DestinationInput";
import DatesInput from "./DatesInput";
import GuestsInput from "./GuestsInput";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormAvailable: false,
      display: "none",
      destinationInputValue: "",
      arrWithResult: []
    }
  };

  getDestinationInputValue = (value) => {
    this.setState({
      destinationInputValue: value,
    }),
      console.log(value)
  };

  addFilterForm = () => {
    this.setState(prevState => ({isFormAvailable: !prevState.isFormAvailable}))
  };

  filterArray = () => {
    data.filter((item) =>
      item.city.toLowerCase().includes(this.state.destinationInputValue.toLowerCase()) ||
      item.name.toLowerCase().includes(this.state.destinationInputValue.toLowerCase()) ||
      item.country.toLowerCase().includes(this.state.destinationInputValue.toLowerCase())
    )
  };


  clickButton = () => {
    if (!this.state.destinationInputValue) {
      () => alert("Enter city into search"),
        this.setState({display: "none"});
    } else {
      this.filterArray();
      this.setState({display: "block"});
    }
  };

  render() {
    return (
      <>
        <article className="form-container col-lg-12 col-12">
          <form action="/" method="post">
            <div className="row-form">
              <DestinationInput onChange={this.getDestinationInputValue} />
              <DatesInput />
              <GuestsInput />
              <button id="search-btn" className="col-button button-text col-lg-12 col-12"
                      onClick={this.clickButton}>
                Search
              </button>
            </div>
          </form>
        </article>
        <section className="dd" style={{display: this.state.display}}>
          <h2>Available Hotels</h2>
          {this.state.arrWithResult.map((hotel) => (
            <AvailableHotels key={hotel.id} city={hotel.city} name={hotel.name}
                             country={hotel.country}/>
          ))}
        </section>
      </>
    );
  }
}

export default Form;