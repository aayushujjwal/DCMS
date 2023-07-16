import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <h1>Welcome to Dance Club Management System</h1>
        <p>Explore our club, login to manage events, and more!</p>
      </div>
    </div>
  );
};

export default LandingPage;
