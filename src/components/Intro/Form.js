import React, {useState} from 'react';
import '../../assets/styles/Intro/Form.css';
import AvailableHotels from "./AvailableHotels";
import data from "../../constants/arrays/Hotels";

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
              <div className="input-destination">
                <input
                  id="destination"
                  type="text"
                  name="place"
                  onChange={this.getDestinationInputValue}
                  className="col-destination col-lg-12 col-12"
                  required
                />
                <label className="label-destination" htmlFor="destination"
                >Your destination or hotel name</label
                >
              </div>
              <div className="input-date-check">
                <div className="label-date-first">
                  <input
                    id="check-in"
                    type="text"
                    className="col-date col-lg-12 col-12"
                    required
                  />
                  <label className="label-date" htmlFor="check-in">Check-in</label>
                </div>
                <div className="label-date-second">
                  <input
                    id="check-out"
                    type="text"
                    className="col-date col-lg-12 col-12"
                    required
                  />
                  <label className="label-date" htmlFor="check-out">Check-out</label>
                </div>
              </div>
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