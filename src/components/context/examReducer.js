import {
    GET_EXAMNAME
} from '../types';

export default(state,action) => {
    switch(action.type){
        case GET_EXAMNAME:
            return{
                ...state,
                examName: action.payload,
            }
        default:
            return state
    }
}
