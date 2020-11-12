import React, { Fragment } from 'react'
import {
Button,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import LeftNav from "./LeftNav";

const Dashboard = () => {

    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <div className="workarea">
                <div className="createExamBtn"><Link to="/createExam" style={{textDecoration:'none'}}> <Button variant="contained">Create Question Bank</Button></Link></div>
                <div className="tabAlign"></div>
            </div>
        </Fragment>
        
    )
}

export default Dashboard
