import { Button } from '@material-ui/core'
import React from 'react';
import {Link} from 'react-router-dom';

const LeftNav = () => {
    return (
        <div className="leftpanel">
            <ul>
                <li><Link to="/dashboard" style={{textDecoration:'none'}}><Button variant="contained">Dashboard</Button></Link></li>
            </ul>
            <ul>Personal
                <li><Link to="/createExam" style={{textDecoration:'none'}}><Button variant="contained">Exams</Button></Link></li>
                <li><Link to="/profile" style={{textDecoration:'none'}}><Button variant="contained">Profile</Button></Link></li>

            </ul>
      </div>
    )
}
export default LeftNav;

