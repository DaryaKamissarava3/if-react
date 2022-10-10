import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HotelDetails from '../../pages/HotelDetails';
import MainPage from '../../pages/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="hotels/:hotelId" element={<HotelDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;