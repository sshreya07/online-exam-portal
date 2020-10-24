import { Button } from '@material-ui/core'
import React from 'react';

const LeftNav = () => {
    return (
        <div className="leftpanel">
            <ul>
                <li><Button variant="contained">Dashboard</Button></li>
            </ul>
            <ul>Student
                <li><Button variant="contained">Attend Exams</Button></li>
                <li><Button variant="contained">Profile</Button></li>
            </ul>
            <ul>Teacher
                <li><Button variant="contained">Schedule Exams</Button></li>
                <li><Button variant="contained">Results</Button></li>
            </ul>
            <ul>Admin
                <li><Button variant="contained">Account</Button></li>
            </ul>
      </div>
    )
}
export default LeftNav;

