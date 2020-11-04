import React from 'react'
import {
Button,
} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Dashboard = () => {

    return (
        <div className="workarea">
           <div className="createExamBtn"><Link to="/exams" style={{textDecoration:'none'}}> <Button variant="contained">Create Question Bank</Button></Link></div>
           <div className="tabAlign"></div>
        </div>
    )
}

export default Dashboard
