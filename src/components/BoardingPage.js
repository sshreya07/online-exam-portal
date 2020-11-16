import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent} from '@material-ui/core';
import BackgroundImage from './backgroundNew.jpg';



const BoardingPage = () => {
    return (
        <div className="onboard">
           <Card id="outerCard">
             <CardContent>
             <ul>
              <li> <Link to="/home" style={{textDecoration:'none'}}><Button variant="outlined">Teacher</Button></Link>
              </li>
              <li>
              <Link to="/home" style={{textDecoration:'none'}}><Button variant="outlined">Student</Button></Link>
              </li>
            </ul>
            <Card className="innerCard">
              <CardContent>
                <img src={BackgroundImage} alt="online exam" />
              </CardContent>
            </Card> 
             </CardContent>
           </Card>
           <div className="footer">
            <ul>
              <li> Build with React
              </li>
            </ul>
            </div>
            
        </div>
    )
}

export default BoardingPage
