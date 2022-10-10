import React, { useState } from 'react';
import Intro from '../../components/TopSection/index.js';
import Section from '../../components/Section/index.js';
import AvailableHotels from '../../components/AvailableHotels/index.js';

const MainPage = () => {
  const [searchHotels, setSearchHotels] = useState([]);
  const [isClassName, setClassName] = useState(false);

  return (
    <>
      <Intro updateStatus={setClassName} updateData={setSearchHotels} />
      <AvailableHotels isActive={isClassName} foundHotels={searchHotels} />
      <Section title="Homes guests loves" />
    </>
  );
};

export default MainPage;