import React from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';
// import logo from '../assets/tvm-header-logo.png';

function Navbar() {
  return (
    <div className="navbar" data-testid="navbar">
      {/* <img src={logo} alt="logo" className="logo" /> */}
      <h1 className="nav-title">TVMAZE Shows</h1>
      <div className="setting-mic">
        <FontAwesomeIcon icon={faMicrophone} className="user-icon" />
        <FontAwesomeIcon icon={faGear} className="user-icon" />
      </div>
    </div>
  );
}

export default Navbar;
