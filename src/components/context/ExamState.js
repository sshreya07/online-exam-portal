import React, {useReducer} from 'react';
import ExamContext from "./examContext";
import ExamReducer from "./examReducer";

import {
    GET_EXAMNAME
} from '../types';

const ExamState = (props) => {
    const initialState = {
        examType: 'objective',
        examName: "",
        // date: Date.now(),
        // duration: 0,
        // noOfQues: 0,
        // courseName: '',
        // courseId: '',
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

    const getexamName = (text) => {
        dispatch({ 
            type: GET_EXAMNAME, 
            payload: {text},
        });
    }

    return (
        <ExamContext.Provider 
        value={{examType:state.examType,
        examName: state.examName,
        // date: state.date,
        // duration: state.duration,
        // noOfQues: state.courseName,
        // courseName: state.courseId,
        getexamName
        }}>
            {props.children}
        </ExamContext.Provider>
    )
}

export default ExamState;
