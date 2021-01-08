import React, { Fragment } from 'react';
import LeftNav from './LeftNav';
import Navbar from './Navbar';
import ScheduleExam from './ScheduleExam';

const Exams = () => {
    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <ScheduleExam/>
        </Fragment>
    )
}

export default Exams
