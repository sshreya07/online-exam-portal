import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

const About = () => {
    return (
        <div>
            <div className="onboard" style={{color:'white' }}>
            <h3 style={{float:'left'}}>About</h3>
            <ul>
            <li>
              <Link to="/" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">HOME</Button></Link>
              </li>
              <li> <Link to="/about" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">ABOUT</Button></Link>
              </li>
              <li>
              <Link to="/contact" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">CONTACT</Button></Link>
              </li>
            </ul>
            </div>
            <div className="container">
                <h2>
                    ONLINE EXAM PORTAL
                </h2>
                <p>This APP is for Online Examination System</p>
                <p>Version 1.0</p>
            </div>
        </div>
    )
}

export default About
