import React, { Component } from 'react';
import CardItem from './CardItem';
import '../../assets/styles/HomesGuestsLoves/card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
    };
  }

  componentDidMount() {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
      .then((response) => response.json())
      .then((hotels) => {
        this.setState({
          hotels
        });
      });
  }

  render() {
    return (
      <div className="card">
        {
          this.state.hotels.map((item) =>
            (
              <CardItem
                imageUrl={item.imageUrl}
                name={item.name}
                city={item.city}
                country={item.country}
                key={item.id}
              />
            ))
        }
      </div>
    );
  }
}
