import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent} from '@material-ui/core';
import BackgroundImage from './backgroundNew.jpg';



const BoardingPage = () => {
    return (
        <div className="onboard">
           <ul>
              <li> <Link to="/home" style={{textDecoration:'none'}}><Button variant="outlined">Teacher</Button></Link>
              </li>
              <li>
              <Link to="/home" style={{textDecoration:'none'}}><Button variant="outlined">Student</Button></Link>
              </li>
            </ul>
            <Card className="card">
              <CardContent>
                <img src={BackgroundImage} alt="online exam" />
              </CardContent>
            </Card> 
        </div>
    )
}

export default BoardingPage
