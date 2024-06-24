// Summary.js
import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import SummaryContent from '../components/SummaryContent';

const Summary = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Summary" />
      <SummaryContent/>
      <Footer/>
    </div>
  );
}

export default Summary;
