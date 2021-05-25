import React , {useState,useContext} from 'react'
import {
TextField,
Button,
FormControl,
FormControlLabel,
Radio
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExamContext from './context/examContext';
import Navbar from './Navbar';
import LeftNav from './LeftNav';
import ExamList from './examList';
import Axios from 'axios';

const ScheduleExam = () => {
    const examContext = useContext(ExamContext);

    const [examName , setExamName] = useState("");
    const [courseName , setCourseName] = useState("");
    const [courseId , setCourseId] = useState("");
    const [date , setDate] = useState("");
    const [time , setTime] = useState("");
    const [duration , setDuration] = useState("");
    const [totalQues , setTotalQues] = useState("");
    const [totalMarks , setTotalMarks] = useState("");

    let quesCounter = 0;

    const onSubmit = (event) => {
      event.preventDefault();
      examContext.getExamName(examName);
      examContext.getCourseName(courseName);
      examContext.getCourseId(courseId);
      examContext.getDate(date);
      examContext.getTime(time);
      examContext.getDuration(duration);
      examContext.getTotalQues(totalQues);
      examContext.getTotalMarks(totalMarks);
      const obj = {
        examName: examName,
        courseName: courseName,
        courseId: courseId,
        date: date,
        time: time,
        duration: duration,
        totalQues: totalQues,
        totalMarks: totalMarks
      }
      console.log(obj);


      // ExamList.push(obj);
      // console.log(ExamList);
      // Axios.post('examlist.json',obj)
      // .then(res=>console.log(res.data));
      // examContext.AddExam(obj);

    }

    const next = () =>{
      quesCounter++;
        const div = document.createElement('div');
        div.id = 'quesArea';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        const op1 = document.createElement('textarea');
        const op2 = document.createElement('textarea');
        const op3 = document.createElement('textarea');
        const op4 = document.createElement('textarea');
        const br = document.createElement('br');
        op1.placeholder= 'option 1';
        op2.placeholder= 'option 2';
        op3.placeholder= 'option 3';
        op4.placeholder= 'option 4';
        const q = document.createElement('textarea');
        q.placeholder='enter question:'+ [quesCounter];
        div.appendChild(q);
        div.appendChild(op1);
        div.appendChild(op2);
        div.appendChild(op3);
        div.appendChild(op4);
        div.appendChild(br);
        document.getElementById('enterQues').appendChild(div);
        document.getElementById('submitBtn').style.display = 'block';
        // document.getElementById('next').style.display = 'block';
    }

    const nextTextarea = () => {
      if(quesCounter === totalQues){
        // document.getElementById("next").style.display = "none";
        document.getElementById('nextBtn').style.display = 'none';

      }else{
        next();
      }
  }

    return (
      <div>
        <Navbar/>
        <LeftNav/>
        <div className="workarea">
            
            <form onSubmit={onSubmit} className="ExamForm">
            <table className="Table">
              <thead><h2>Schedule Exam</h2></thead>
              <tbody>
                <tr><td>Exam Type</td>
                <td><FormControl>
                      <FormControlLabel value="end" control={<Radio color="primary" />} label="Objective" />
                    </FormControl></td></tr>
                <tr><td>Exam Name</td><td><TextField label="exam name" variant="outlined" size="small" type="text" align="right" value={examName} onChange={event => setExamName(event.target.value.toString())} /></td></tr>

                <tr><td>Course Name and Id</td><td><TextField id="standard-required" label="course name" variant="outlined" size="small" type="text" value={courseName} onChange={event => setCourseName(event.target.value.toString())} /></td><td><TextField id="standard-required" label="id" variant="outlined" size="small" type="text" value={courseId} onChange={event => setCourseId(event.target.value)} /></td></tr>

                <tr><td>Exam Date</td><td><TextField id="standard-required"  variant="outlined" size="small" type="date" value={date} onChange={event => setDate(event.target.value.toString())} /></td></tr>

                <tr><td>Start Time</td><td><TextField id="standard-required"  variant="outlined" size="small" type="time" value={time} onChange={event => setTime(event.target.value.toString())} /><span style={{position: 'relative', top: '1rem', left:'.5rem'}}>24-hour Clock</span></td></tr>

                <tr><td>Duration</td><td><TextField id="standard-required" label="total time" variant="outlined" size="small" type="text" value={duration} onChange={event => setDuration(event.target.value.toString())} /><span style={{position: 'relative', top: '1rem', left:'.5rem'}}>minutes</span></td></tr>

                <tr><td>No of Questions</td><td><TextField id="standard-required" label="total Questions" variant="outlined" size="small" type="number" value={totalQues} onChange={event => setTotalQues(event.target.value)}/></td></tr>

                <tr><td>Marks</td><td><TextField id="standard-required" label="total Marks" variant="outlined" size="small" type="number" value={totalMarks} onChange={event => setTotalMarks(event.target.value)}/><span style={{position: 'relative', top: '1rem', left:'.5rem'}}>10 each</span></td></tr>

                {/* <span style={{position: 'relative', top: '3rem', left:'13rem'}}><tr><td><Link to="/QuesBank" style={{ textDecoration: 'none'}}><Button type="btn" variant="outlined">Next</Button></Link></td></tr></span> */}

                {/* <span id="nextBtn" style={{position: 'relative', top: '3rem', left:'13rem'}}><tr><td><Button type="btn" variant="outlined" onClick={nextTextarea}>Next</Button></td></tr></span> */}

              </tbody>
            </table>
            <div id="enterQues" style={{position:'relative',top:'3rem'}}>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <span id="submitBtn" style={{position: 'relative', top: '3rem', left:'12rem', display:'none'}}><tr><td><Button type="submit" variant="outlined">Submit</Button></td></tr></span>
            <span id="nextBtn" style={{position: 'relative', top: '3rem', left:'13rem'}}><tr><td><Button type="btn" variant="outlined" onClick={nextTextarea}>Next</Button></td></tr></span>
            </div>
            </form>
        </div>
        </div>
    )
}

export default ScheduleExam
