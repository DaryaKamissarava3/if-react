import React, {useState} from 'react';
import Section from './components/HomesGuestsLoves/Section';
import Header from './components/Intro/Header';
import Intro from './components/Intro/Intro';
import AvailableHotels from './components/Intro/AvailableHotels';
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Routes, Route, Router, Link} from "react-router-dom";
import Hotel from "./components/Intro/Hotel";

function App() {
  const [searchHotels, setSearchHotels] = useState([]);
  const [isClassName, setClassName] = useState(false);

  return (
    <>
      <Header/>
      <Intro updateStatus={setClassName} updateData={setSearchHotels}/>
      <Section title="Homes guests loves"/>
      <Footer/>
      <BrowserRouter>
        <AvailableHotels isActive={isClassName} foundHotels={searchHotels} />
          <Routes>
            <Route path={'/'} element={<Header/>}/>
            <Route path={'hotels/:hotelId'} element={<Hotel/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
