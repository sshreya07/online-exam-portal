import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import BackgroundImage from './iconNew.jpg';



const BoardingPage = () => {
    return (
        <div className="onboard">
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
            <div className="text">
              <h1>Online<br/> Exam Platform<br/> 
              <Link to="/dashboard" style={{textDecoration:'none',position:'relative',top:'3rem'}}><Button variant="outlined">GET STARTED</Button></Link>
              </h1>
             
            </div>
            <div style={{margin:'1.8rem 0 0 5.5rem',display:'flex',justifyContent:'flex-end'}}>
              <img src={BackgroundImage} alt="online exam" />
            </div>
                
           <div className="footer">
            <ul>
              <li> 
              </li>
            </ul>
            </div>
            
        </div>
    )
}

export default BoardingPage
