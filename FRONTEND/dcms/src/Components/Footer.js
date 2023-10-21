import React from 'react';
import './Styles/Footer.css';
import logoo from '../Assets/6.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoo} alt="Dance Club Logo" />
          <h2>Rhythm Groove Club</h2>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/admin">Admin</a></li>
            {/* <li><a href="/events">Events</a></li> */}
            {/* <li><a href="/classes">Classes</a></li> */}
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        {/* <div className="footer-social">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rhythm Groove Club. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
