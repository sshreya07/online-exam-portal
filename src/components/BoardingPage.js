import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, CardContent} from '@material-ui/core';
import BackgroundImage from './backgroundNew.jpg'

const BoardingPage = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default BoardingPage
