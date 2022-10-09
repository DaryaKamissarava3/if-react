import React, {useState} from 'react';
import Header from "../Intro/Header";
import Intro from "../Intro/Intro";
import Section from "../HomesGuestsLoves/Section";
import Footer from "../Footer/Footer";
import AvailableHotels from "../Intro/AvailableHotels";
import HotelRoutes from "../Routes/HotelRoutes";

function MainPage() {
  const [searchHotels, setSearchHotels] = useState([]);
  const [isClassName, setClassName] = useState(false);

  return (
    <>
      <Header/>
      <Intro updateStatus={setClassName} updateData={setSearchHotels}/>
        <AvailableHotels isActive={isClassName} foundHotels={searchHotels}/>
      <Section title="Homes guests loves"/>
      <Footer/>
    </>
  );
}

export default MainPage;