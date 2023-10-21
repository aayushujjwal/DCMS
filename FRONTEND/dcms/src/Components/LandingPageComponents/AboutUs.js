import React from 'react';
import '../Styles/LandingPageComponents/AboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us-section">
      <div className="hero-banner">
        <div className="hero-content">
          {/* <h1 className="hero-title">Welcome to Our Story</h1> */}
          <p className="hero-description">
            {/* We are a passionate team dedicated to bringing you the best experiences in dance and music. */}
          </p>
        </div>
      </div>
      <div className="about-content">
        <h2 className="about-heading">Rhythm Groove Club</h2>
        <p className="about-text">
        Welcome to Rhythm Groove Club, where rhythmic artistry and pulsating beats converge. Immerse yourself in a dynamic realm of dance mastery, where the club transforms into an academy. Unleash your inner groove, guided by accomplished mentors, and let the music compose your journey to excellence. Experience dance, elevated.
        </p>
        {/* Add more content about your brand's story */}
      </div>
    </div>
  );
};

export default AboutUs;
