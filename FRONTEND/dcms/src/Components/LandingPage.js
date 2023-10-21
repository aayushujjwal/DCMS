import React from 'react';
import './Styles/LandingPage.css';
import Header from './Header';
import Footer from './Footer';
import Gallery from './LandingPageComponents/Gallery';
import Locations from './LandingPageComponents/Locations';
import AboutUs from './LandingPageComponents/AboutUs';
const LandingPage = () => {
  return (
    <>
    <Header></Header>
    
    <AboutUs></AboutUs>
    <div className="gradient-divider"></div>
    <Locations></Locations>
    <div className="gradient-divider"></div>
    <Gallery></Gallery>
    <Footer></Footer>
    </>
  );
};

export default LandingPage;
