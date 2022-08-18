import React from 'react';
import SectionTitle from './SectionTitle';
import Card from './Card';
import '../../assets/styles/container.css';

function Container(props) {
  return (
    <div className="container">
      <SectionTitle
        title={props.title}
      />
      <Card />
    </div>
  );
}

export default Container;