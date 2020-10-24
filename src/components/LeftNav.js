import { Card, CardContent,Button } from '@material-ui/core'
import React from 'react';

const LeftNav = () => {
    return (
        <div className="leftpanel">
            <ul>
                <li><Button>Dashboard</Button></li>
            </ul>
            <ul>Student
                <li><Card><a href="/"><CardContent>Attend Exams</CardContent></a></Card></li>
                <li><Card><a href="/"><CardContent>Profile</CardContent></a></Card></li>
            </ul>
            <ul>Teacher
                <li><Card><a href="/"><CardContent>Schedule Exams</CardContent></a></Card></li>
                <li><Card><a href="/"><CardContent>Results</CardContent></a></Card></li>
            </ul>
            <ul>Admin
                <li><Card><a href="/"><CardContent>Account</CardContent></a></Card></li>
            </ul>
      </div>
    )
}
export default LeftNav;

