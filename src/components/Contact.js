import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

const Contact = () => {
    return (
        <div>
            <div className="onboard" style={{color:'white' }}>
            <h2 style={{float:'left'}}>CONTACT</h2>
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
                <h1>comment</h1>
                <p>Oops! that's bad you have faced an issue but you can discuss it with us.</p>
                <p><textarea type="text" defaultValue="" style={{fontSize:'20px'}} /></p>
            </div>
        </div>
    )
}

export default Contact

