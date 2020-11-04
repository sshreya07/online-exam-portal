import React, {useState,useContext} from 'react'
import {
TextField,
Button,
FormControl,
FormControlLabel,
Radio
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExamContext from './context/examContext';

const ExamArea = () => {
    const examContext = useContext(ExamContext);
    
    const [examName , setExamName] = useState("");
    const [courseName , setCourseName] = useState("");
    const [courseId , setCourseId] = useState("");
    const [date , setDate] = useState("");
    const [time , setTime] = useState("");
    const [duration , setDuration] = useState("");
    const [totalQues , setTotalQues] = useState("");

    const onSubmit = (event) => {
      event.preventDefault();
      examContext.getExamName(examName);
      examContext.getCourseName(courseName);
      examContext.getCourseId(courseId);
      examContext.getDate(date);
      examContext.getTime(time);
      examContext.getDuration(duration);
      examContext.getTotalQues(totalQues);
    }

    return (
        <div className="workarea">
            
            <form onSubmit={onSubmit} className="ExamForm">
            <table className="Table">
              <thead><h2>Schedule Exam</h2></thead>
              <tbody>
                <tr><td>Exam Type</td>
                <td><FormControl>
                      <FormControlLabel value="end" control={<Radio color="primary" />} label="Objective" />
                    </FormControl></td></tr>
                <tr><td>Exam Name</td><td><TextField label="exam name" variant="outlined" size="small" type="text" align="right" value={examName} onChange={event => setExamName(event.target.value)} /></td></tr>

                <tr><td>Course Name and Id</td><td><TextField id="standard-required" label="course name" variant="outlined" size="small" type="text" value={courseName} onChange={event => setCourseName(event.target.value)} /></td><td><TextField id="standard-required" label="id" variant="outlined" size="small" type="text" value={courseId} onChange={event => setCourseId(event.target.value)} /></td></tr>

                <tr><td>Exam Date</td><td><TextField id="standard-required"  variant="outlined" size="small" type="date" value={date} onChange={event => setDate(event.target.value)} /></td></tr>

                <tr><td>Start Time</td><td><TextField id="standard-required"  variant="outlined" size="small" type="time" value={time} onChange={event => setTime(event.target.value)} /><span style={{position: 'relative', top: '1rem', left:'.5rem'}}>24-hour Clock</span></td></tr>

                <tr><td>Duration</td><td><TextField id="standard-required" label="name" variant="outlined" size="small" type="text" value={duration} onChange={event => setDuration(event.target.value)} /><span style={{position: 'relative', top: '1rem', left:'.5rem'}}>minutes</span></td></tr>

                <tr><td>No of Questions</td><td><TextField id="standard-required" label="name" variant="outlined" size="small" type="number" value={totalQues} onChange={event => setTotalQues(event.target.value)}/></td></tr>

                <span style={{position: 'relative', top: '3rem', left:'.5rem'}}><tr><td><Button type="submit" variant="outlined">Submit</Button></td></tr></span>

                <span style={{position: 'relative', top: '3rem', left:'13rem'}}><tr><td><Link to="/QuesBank" style={{ textDecoration: 'none'}}><Button type="btn" variant="outlined">Next</Button></Link></td></tr></span>
              </tbody>
            </table>
            </form>
        </div>
    )
}

export default ExamArea;