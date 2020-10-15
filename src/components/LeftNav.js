import { Card, CardContent } from '@material-ui/core'
import React from 'react'

const LeftNav = () => {
    return (
        <div className="leftpanel">
            <ul>
                <li><Card><CardContent>Dashboard</CardContent></Card></li>
            </ul>
            <ul>Student
                <li><Card><CardContent>Attend Exams</CardContent></Card></li>
                <li><Card><CardContent>Profile</CardContent></Card></li>
            </ul>
            <ul>Teacher
                <li><Card><CardContent>Schedule Exams</CardContent></Card></li>
                <li><Card><CardContent>Results</CardContent></Card></li>
            </ul>
            <ul>Admin
                <li><Card><CardContent>Account</CardContent></Card></li>
            </ul>
        </div>
    )
}

export default LeftNav
