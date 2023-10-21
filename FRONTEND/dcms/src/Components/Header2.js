import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Header.css';
import logoo from '../Assets/6.png';

const Header2 = () => {
  return (
    <header className='full'>
      {/* <nav>
        <ul>
        <li>
            <h4><b>Rhythm Groove Club</b></h4>
        </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          {/* <li>
            <Link to="/events">Event</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav> */} 
       <div className="navbar">
      <div className="title"><Link to="/"><img src={logoo} alt="Logo"></img></Link></div>
      
    </div>
    </header>
  );
};

export default Header2;
