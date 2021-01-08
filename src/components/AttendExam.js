import React, { Fragment, useContext,useEffect,useState } from 'react'
import {
Button,
  Card,
  CardContent,
  FormControlLabel,
    Radio,
    FormControl,
    RadioGroup,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import ExamContext from "./context/examContext";

const AttendExam = () => {

    const examContext = useContext(ExamContext);

    const { getQuesList, quesList } = examContext;

    useEffect(() => {
        getQuesList();
        console.log(quesList);
        //eslint-disable-next-line
      }, []);

      const [value,setValue] = useState(null);

      const handleChangeradio = (event) => {
          setValue(event.target.value);
        };

    return (
        <Fragment>
            <Navbar/>
            <div className="workarea">
                <div className="tabAlign">
                <div style={gridGap}>
                            {quesList.map(data => (
                                <Card style={cardHeight} ><CardContent>
                              <div><h4 style={{color:'#530c90', textAlign:'center'}}>{data.question}</h4><br/>
                              A. {data.op1}<br/>
                              B. {data.op2}<br/>
                              C. {data.op3} <br/>
                              D. {data.op4}<br/><br/><br/>
                            <FormControl component="fieldset" >
                                <RadioGroup name="" value={value} onChange={handleChangeradio} style={{display:"inline-flex",flexWrap:"wrap",flexFlow:"row"}}>
                                <FormControlLabel value="A" control={<Radio />} label="A" />
                                <FormControlLabel value="B" control={<Radio />} label="B" />
                                <FormControlLabel value="C" control={<Radio />} label="C" />
                                <FormControlLabel value="D" control={<Radio />} label="D" />
                                </RadioGroup>
                            </FormControl>
                              </div>
                        </CardContent></Card>
                         ))}
                </div>
                <div className="createExamBtn"><Link to="/" style={{textDecoration:'none'}}> <Button variant="contained">Submit</Button></Link></div>
                </div>
            </div>
        </Fragment>  
    )
}

export default AttendExam;

const gridGap = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "2rem",
  };

const cardHeight = {
    height: "20rem",
    fontSize: "20px",
    letterSpacing: "2px"
}