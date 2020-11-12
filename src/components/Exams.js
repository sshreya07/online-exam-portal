import React, { Fragment } from 'react';
import ExamArea from './ExamArea';
import LeftNav from './LeftNav';
import Navbar from './Navbar';

const Exams = () => {
    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <ExamArea/>
        </Fragment>
    )
}

export default Exams
