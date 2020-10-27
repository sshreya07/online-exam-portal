import React, {useReducer} from 'react';
import ExamContext from "./examContext";
import ExamReducer from "./examReducer";

const ExamState = (props) => {
    const initialState = {

    };

    const [state, dispatch] = useReducer(ExamReducer, initialState);

    return (
        <ExamContext.Provider value={{}}>
            {props.children}
        </ExamContext.Provider>
    )
}

export default ExamState;
