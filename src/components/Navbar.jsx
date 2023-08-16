import React from 'react'
import '../styles/Navbar.css';
import logo from '../assets/tvm-header-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear, faMicrophone } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <h1>TVMAZE Shows</h1>
        <div className="setting-mic">
            <FontAwesomeIcon icon={faMicrophone} className="user-icon" />
            <FontAwesomeIcon icon={faGear} className="user-icon" />
        </div>
    </div>
    
    // <button>&lt; Back To Home</button>
  )
}

export default Navbar