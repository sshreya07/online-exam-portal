import { Button } from '@material-ui/core'
import React from 'react';

const LeftNav = () => {
    return (
        <div className="leftpanel">
            <ul>
                <li><Button variant="contained">Dashboard</Button></li>
            </ul>
            <ul>Personal
                <li><Button variant="contained">Exams</Button></li>
                <li><Button variant="contained">Profile</Button></li>

            </ul>
            <ul>Admin
                <li><Button variant="contained">Users</Button></li>
            </ul>
      </div>
    )
}
export default LeftNav;

