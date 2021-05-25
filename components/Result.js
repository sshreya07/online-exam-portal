import React , {useEffect,useContext} from 'react';
import{
    Card,
    CardContent,
    Table,
    TableHead,
    TableRow
} from '@material-ui/core';
import Navbar from './Navbar';
import LeftNav from './LeftNav';
import ExamContext from "./context/examContext";
import resultImg from "./results.png";

const Result = () => {

    let StudentList = [];
    let StudentList2 = [];
    let names ;
    let emails  ;
    let courses ;
    let Id ;
    let scores;
    let SSnames;
    let SSemails;
    let SScourses;
    let SSId;
    let SSscores;

    const examContext = useContext(ExamContext);

  const {students} = examContext;
    

    useEffect(() => {
         SSnames = sessionStorage.getItem('name');
         SSemails = sessionStorage.getItem('email') ;
         SScourses = sessionStorage.getItem('course');
         SSId = sessionStorage.getItem('id');
         SSscores = sessionStorage.getItem('score');
         const obj2 = {
            username : SSnames,
            email : SSemails,
            course : SScourses,
            courseId : SSId,
            score : SSscores
        }

        StudentList2.push(obj2);        
        // console.log(names);
        // console.log(emails);
        // console.log(courses);
        // console.log(Id);
        // console.log(scores);
        getStudentList();
        displayList();
        // eslint-disable-next-line
    }, []);

    const displayList = () => {
        
        for(let i=0;i<StudentList.length;i++){
        let row = document.createElement('tr');
        let next = document.createElement('br');
        row.id = 'row';
        let data1 = document.createElement('td');
        data1.innerHTML = names;
        let data2 = document.createElement('td');
        data2.innerHTML = emails;
        let data3 = document.createElement('td');
        data3.innerHTML = courses;
        let data4 = document.createElement('td');
        data4.innerHTML = Id;
        let data5 = document.createElement('td');
        data5.innerHTML = scores;
        document.getElementById('list1').appendChild(row);
        document.getElementById('row').appendChild(data1);
        document.getElementById('row').appendChild(data2);
        document.getElementById('row').appendChild(data3);
        document.getElementById('row').appendChild(data4);
        document.getElementById('row').appendChild(data5);
        document.getElementById('row').appendChild(next);
        }

        

    }

    // const getStudentList = () => {
    //     const obj = {
    //         username : names,
    //         email : emails,
    //         course : courses,
    //         courseId : Id,
    //         score : scores
    //     }
    //     StudentList.push(obj);
    //     console.log(StudentList);
    // }

    const getStudentList= () => {
        // for(let i=0;i<names.length;i++){
        if(localStorage.getItem('name') === null){
            names = [];
        }else{
            names = JSON.parse(localStorage.getItem('name'));
        }

        if(localStorage.getItem('email') === null){
            emails = [];
        }else{
            emails = JSON.parse(localStorage.getItem('email'));
        }

        if(localStorage.getItem('course') === null){
            courses = [];
        }else{
            courses = JSON.parse(localStorage.getItem('course'));
        }

        if(localStorage.getItem('courseId') === null){
            Id = [];
        }else{
            Id = JSON.parse(localStorage.getItem('courseId'));
        }

        if(localStorage.getItem('score') === null){
            scores = [];
        }else{
            scores = JSON.parse(localStorage.getItem('score'));
        }
    //    }

        // while(localStorage.getItem('name') === null){
            console.log(names);
            console.log(emails);
            console.log(courses);
            console.log(Id);
            console.log(scores);
            const obj = {
                username : names,
                email : emails,
                course : courses,
                courseId : Id,
                score : scores
            }
            StudentList.push(obj);
        // }

        console.log(StudentList);
    }

    return (
        <div>
            <Navbar/>
            <LeftNav/>
            <Card className="table" variant="outlined" style={{width:"910px"}}>
                    <CardContent>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <td>Student Name</td>
                                    <td align="right">Gmail</td>
                                    <td align="right">Course Name</td>
                                    <td align="right">Course ID</td>
                                    <td align="right">Result</td>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </CardContent>
                </Card><br/>
                <table className="table" >
                        <tbody id="tableData">
                              <div id="list1">
                              {StudentList.map(data => (
                                  <tr>
                                  <td>{data.username}</td>
                                  <td align="right">{data.email}</td>
                                  <td align="right">{data.course}</td>
                                  <td align="right">{data.courseId}</td>
                                  <td align="right">{data.score}</td>
                                </tr>
                              ))}
                              </div>
                              <div id="list2">
                              {StudentList2.map(data => (
                                  <tr>
                                  <td>{data.username}</td>
                                  <td align="right">{data.email}</td>
                                  <td align="right">{data.course}</td>
                                  <td align="right">{data.courseId}</td>
                                  <td align="right">{data.score}</td>
                                </tr>
                              ))}
                              </div>
                        </tbody>
                </table> 
                <div style={{float:"right", position:"relative",top:"15rem"}}><img src={resultImg} alt="resultimg" width="400rem" height="300rem" /></div>        
        </div>
    )
}

export default Result
