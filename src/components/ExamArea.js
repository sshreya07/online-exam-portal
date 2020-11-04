import React, {useState,useContext} from 'react'
import {
TextField,
Button
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import ExamContext from './context/examContext';

const ExamArea = () => {
    const examContext = useContext(ExamContext);
    
    const [examName , setExamName] = useState("");

    const onSubmit = (event) => {
      event.preventDefault();
      console.log(examName);
      examContext.getexamName(examName);
    }

    return (
        <div className="workarea">
            
            <form onSubmit={onSubmit}>
            <table>
              <tbody>
                <tr><td>Exam Name</td><td><TextField label="name" variant="outlined" size="small" type="text" align="right" value={examName} onChange={event => setExamName(event.target.value)} /></td></tr>
                <tr><td><Link to="/QuesBank" style={{ textDecoration: 'none'}}><Button type="submit">Next</Button></Link></td></tr>
              </tbody>
            </table>
            </form>
        </div>
    )
}

export default ExamArea;