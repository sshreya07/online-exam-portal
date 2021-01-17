import React, { Fragment, useContext,useEffect,useState } from 'react'
import {
Button,
  Card,
  CardContent,
    FormControl,
} from '@material-ui/core';
import Navbar from "./Navbar";
import ExamContext from "./context/examContext";
import quiz from './question';

const AttendExam = () => {

    const examContext = useContext(ExamContext);

    // const { getQuesList, quesList } = examContext;

    let availableQues = [];
    let availableOpt = [];
    let totalOpt = [];
    let quesCounter = 0; 
    let currentQues = '';
    let score = 0;
    let count = 0;

    useEffect(() => {
        // getQuesList();
        // console.log(quesList);
        //eslint-disable-next-line
        setAvailableQues();
        getNewQues();
        // console.log(quiz);
      }, []);

      const setAvailableQues = () => {
          const totalQuestion = quiz.length;
          for (let i = 0; i < totalQuestion; i++) {
            // console.log(quiz[i]);
            availableQues.push(quiz[i]);
            
          }
      }

      const getNewQues = () => {
        const quesIndex = availableQues[Math.floor(Math.random()*availableQues.length)];
        currentQues = quesIndex; 
        document.getElementById("quesNumber").innerHTML = "Question " + (quesCounter + 1) + " of " + quiz.length;
        document.getElementById("quesText").innerHTML = currentQues.q;
        // console.log(availableQues);
        //splice to remove the repeatition of question
        const index1 = availableQues.indexOf(quesIndex);
        availableQues.splice(index1,1);

        //set options
        //set option length
        const optionLen = currentQues.options.length;

        for(let i=0; i<optionLen ;i++){
          availableOpt.push(i);
          totalOpt.push(i);
          // console.log(totalOpt);

        }

        //   document.getElementById("0").innerHTML = currentQues.options[0] ;
        //   document.getElementById("1").innerHTML = currentQues.options[1] ;
        //   document.getElementById("2").innerHTML = currentQues.options[2] ;
        //   document.getElementById("3").innerHTML = currentQues.options[3] ;

        for(let i=0; i<optionLen ;i++){
          
          const optionIndex = availableOpt[Math.floor(Math.random() * availableOpt.length)];
          const index2 = availableOpt.indexOf(optionIndex);
          availableOpt.splice(index2,1);

          const option = document.createElement("input");
          option.type = 'button';
          option.value = currentQues.options[optionIndex];
          option.id = optionIndex;
          option.style.padding = "2rem 4rem";
          option.style.border = "none";
          option.style.fontSize = "20px";
          document.getElementById("quesOption").appendChild(option); 

          // option.setAttribute('onclick',"{getResult}");

          // option.addEventListener('click',getResult);

          // option.onClick = getResult;

        }

        document.getElementById("0").addEventListener('click',getResult0);
        document.getElementById("1").addEventListener('click',getResult1);
        document.getElementById("2").addEventListener('click',getResult2);
        document.getElementById("3").addEventListener('click',getResult3);

        // getAns();

        quesCounter++;     
      }

      const getResult0 = () => {
          console.log(0);
          const id = 0;
          if(id === currentQues.answer){
            console.log("correct");
            count++;
            score += 5;
          }else{
            console.log("wrong");
          }
      }

        const getResult1 = () => {
          console.log(1);
          const id = 1;
          if(id === currentQues.answer){
            console.log("correct");
            count++;
            score += 5;
          }else{
            console.log("wrong");
          }
      }

        const getResult2 = () => {
          console.log(2);
          const id = 2;
          if(id === currentQues.answer){
            console.log("correct");
            count++;
            score += 5;
          }else{
            console.log("wrong");
          }
      }

      const getResult3 = () => {
        console.log(3);
        const id = 3;
        if(id === currentQues.answer){
          console.log("correct");
          count++;
          score += 5;
        }else{
          console.log("wrong");
        }
    }

      // const getAns = () => {
      //   document.getElementById("0").onclick = getResult ;
      // }

      const Next = () => {
        document.getElementById("quesOption").innerHTML = '';
        if(quesCounter === (quiz.length-1)){
          document.getElementById("next").innerHTML = "submit";
          document.getElementById("next").onclick = function(){
            examOver();
          }
        }
        if(quesCounter === quiz.length){
          console.log("exam over");
        }else{
          getNewQues();
        }
      }

      const examOver = () => {
        document.getElementById("quesText").innerHTML = "<br/><br/>Woohoo exam DONE!<br/><br/><br/> You answered <br/> <strong>" + (count) + " </strong><br/>question(s) correct <br/><br/><br/>Your total Marks " + (score);
        document.getElementById("next").style.display = 'none';
        document.getElementById("quesNumber").style.display = 'none';
        // document.getElementById("result").innerHTML = 'you have answered ' + {count} + ' questions correct' + "<br>/" + 'your total score ' + {score} ;

      }


    return (
        <Fragment>
            <Navbar/>
            <div className="workarea">
                <div className="tabAlign">
                <div >
                                <Card style={cardHeight} ><CardContent>
                              <div><h4 style={{color:'#530c90',textAlign:"center"}} id="quesNumber"></h4>
                            <h3 id="quesText" style={{textAlign:"center"}}></h3>
                            <FormControl component="fieldset" >
                                <div id="quesOption" style={gridGapOpt}>
                                  {/* <Button variant="contained" id="0" className="op1" onClick={getResult(this)}></Button>
                                  <Button variant="contained" id="1" className="op2" onClick={getResult(this)}></Button>
                                  <Button variant="contained" id="2" className="op3" onClick={getResult(this)}></Button>
                                  <Button variant="contained" id="3" className="op4" onClick={getResult(this)}></Button> */}
                                </div>
                            </FormControl>
                            <div id="result"></div>
                            <div><Button variant="contained" onClick={Next} style={{position:'relative',top:'4rem',left:'20rem'}} id="next">Next</Button></div>
                              </div>
                        </CardContent></Card>
                </div>
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

  const gridGapOpt = {
    display: "grid",
    gridTemplateColumns: "repeat(2,2fr)",
    gridGap: "3rem",
    position: "relative",
    left: "2rem"
  };

const cardHeight = {
    height: "30rem",
    fontSize: "20px",
    letterSpacing: "2px",
    width: "30rem",
    position:"relative",
    left:"15%"
}