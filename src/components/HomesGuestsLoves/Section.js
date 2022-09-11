import React from 'react';
import '../../assets/styles/HomesGuestsLoves/section.css';
import SectionTitle from './SectionTitle';
import Card from './Card';

function Section(props) {
  return (
    <section className="section section--blue">
      <div className="container">
        <SectionTitle
          title={props.title}
        />
        <Card />
      </div>
    </section>
  );
}

export default Section;