import React, { Fragment } from 'react'
import {
Button,
Table,
  TableHead,
  TableRow,
  Card,
  CardContent
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
                
                <div className="tabAlign">
                <div style={gridGap}>
                    <Card style={cardHeight}><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card>
                    <Card style={cardHeight}><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card>
                </div><br/><br/>
                <Card className="table" variant="outlined" style={{width:"910px"}}>
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
                          <tr>
                            <td>Exam Name</td>
                            <td align="right">Course Name</td>
                            <td align="right">Course Id</td>
                            <td align="right">Exam Date</td>
                            <td align="right">Start Time</td>
                            <td align="right">Duration</td>
                          </tr>
                        </tbody>
                        </table>
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
