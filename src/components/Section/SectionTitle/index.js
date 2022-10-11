import React from 'react';
import './sectionTitle.css';

const SectionTitle = ({ title }) => {
  return (
    <div className="section-header">
      <h2 className="section-subtitle">{title}</h2>
    </div>
  );
};

export default SectionTitle;