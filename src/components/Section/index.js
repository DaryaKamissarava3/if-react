import React from 'react';
import './section.css';
import SectionTitle from './SectionTitle/index.js';
import Card from '../Card/index.js';

const Section = ({ title }) => {
  return (
    <section className="section section--blue">
      <div className="container">
        <SectionTitle
          title={title}
        />
        <Card />
      </div>
    </section>
  );
};

export default Section;