import React from 'react';
import logo from './logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="logo" id="logoImg"></img>&ensp;<span id="logo">EXAM PORTAL</span>
        </div>
    )
}

export default Navbar
