import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "../Intro/Header";
import Hotel from "../containers/Hotel";
import Layout from "../containers/Layout";

const HotelRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={'/'} element={<Header/>}/>
            <Route path={'hotels/:hotelId'} element={<Hotel />}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
};

export default HotelRoutes;