import React, {useReducer} from 'react';
import ExamContext from "./examContext";
import ExamReducer from "./examReducer";

import {
    GET_COURSENAME,
    GET_EXAMNAME,
    GET_COURSEID,
    GET_DATE,
    GET_TIME,
    GET_DURATION,
    GET_TOTALQUES
} from '../types';

const ExamState = (props) => {
    const initialState = {
        examType: 'objective',
        examName: "",
        // date: Date.now(),
        date: '',
        time: '',
        duration: 0,
        totalQues: 0,
        courseName: '',
        courseId: '',
        // // monitoring: false,
        // // negativeMarking: false,
        // questions: [],
        // examinees: [],
        // currQues: 1,
        // question: '',
        // optionA: '',
        // optionB: '',
        // optionC: '',
        // optionD: '',
        // options: [],
        // emails: ''
    };

    const [state, dispatch] = useReducer(ExamReducer, initialState);

    const getExamName = (text) => {
        dispatch({ 
            type: GET_EXAMNAME, 
            payload: {text},
        });
    }

    const getCourseName = (text) => {
        dispatch({ 
            type: GET_COURSENAME, 
            payload: {text},
        });
    }

    const getCourseId = (text) => {
        dispatch({ 
            type: GET_COURSEID, 
            payload: {text},
        });
    }

    const getDate = (text) => {
        dispatch({ 
            type: GET_DATE, 
            payload: {text},
        });
    }

    const getTime = (text) => {
        dispatch({ 
            type: GET_TIME, 
            payload: {text},
        });
    }

    const getDuration = (text) => {
        dispatch({ 
            type: GET_DURATION, 
            payload: {text},
        });
    }

    const getTotalQues = (text) => {
        dispatch({ 
            type: GET_TOTALQUES, 
            payload: {text},
        });
    }

    return (
        <ExamContext.Provider 
        value={{examType:state.examType,
        examName: state.examName,
        date: state.date,
        duration: state.duration,
        courseName: state.courseName,
        courseId: state.courseId,
        time: state.time,
        totalQues: state.totalQues,
        getExamName,
        getCourseName,
        getCourseId,
        getDate,
        getTime,
        getDuration,
        getTotalQues
        }}>
            {props.children}
        </ExamContext.Provider>
    )
}

export default ExamState;
