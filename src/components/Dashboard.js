import React, { Fragment, useContext,useEffect } from 'react'
import {
Button,
// Table,
//   TableHead,
//   TableRow,
  Card,
  CardContent
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import LeftNav from "./LeftNav";
import ExamContext from "./context/examContext";

const Dashboard = () => {
    const examContext = useContext(ExamContext);

    const { getExamList, examList } = examContext;

    useEffect(() => {
        getExamList();
        console.log(examList);
        //eslint-disable-next-line
      }, []);

    // state = {
    //     examList: []
    // };

    // async componentDidMount(){
    //     const res = await axios.get('https://localhost:44386/api/ExamTable');
    //     this.setState({ examList: res.data});
    //     console.log(this.examList);
    // }

    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <div className="workarea">
                <div className="createExamBtn"><Link to="/createExam" style={{textDecoration:'none'}}> <Button variant="contained">Create Question Bank</Button></Link></div>
                
                <div className="tabAlign">
                <div style={gridGap}>
                            {examList.map(data => (
                                <Card style={cardHeight} ><CardContent>
                              <div>{data.examName}<br/>
                              {data.courseName}<br/>
                              {data.course_ID}<br/>
                              {data.DOE} <br/>
                              {data.startTime}<br/>
                              {data.duration}<br/>
                              </div>
                        </CardContent></Card>

                            ))}
                    {/* <Card><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card>
                    <Card style={cardHeight}><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card> */}
                </div><br/><br/>
                {/* <Card className="table" variant="outlined" style={{width:"910px"}}>
                    <CardContent>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <td>Exam Name</td>
                                    <td align="right">Course Name</td>
                                    <td align="right">Course Id</td>
                                    <td align="right">Exam Date</td>
                                    <td align="right">Start Time</td>
                                    <td align="right">Duration</td>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </CardContent>
                </Card><br/>
                <table className="table">
                        <tbody>
                          {examList.map(data => (
                              <tr>
                              <td>{data.examName}</td>
                              <td align="right">{data.courseName}</td>
                              <td align="right">{data.course_ID}</td>
                              <td align="right">{data.DOE}</td>
                              <td align="right">{data.startTime}</td>
                              <td align="right">{data.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                        </table> */}
                </div>
            </div>
        </Fragment>  
    )
}

export default Dashboard;

const gridGap = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "2rem",
  };

const cardHeight = {
    height: "20rem"
}
