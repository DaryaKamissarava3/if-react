import React, { useState } from 'react';
import Section from './components/HomesGuestsLoves/Section';
import Header from './components/Intro/Header';
import Intro from './components/Intro/Intro';
import AvailableHotels from './components/Intro/AvailableHotels';

function App() {
  const [searchHotels, setSearchHotels] = useState([]);

  return (
    <>
      <Header />
      <Intro updateData={setSearchHotels} />
      <AvailableHotels foundHotels={searchHotels} />
      <Section title="Homes guests loves" />
    </>
  );
}

export default App;
