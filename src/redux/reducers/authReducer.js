import { ADD_USER, REMOVE_USER } from "../actions/actionTypes"

const initialState = {  
    user: ''  
}
const authReducer = (state = initialState, action = {}) => {
    switch (action.type) {    
        case ADD_USER:                   
            return { ...state, user: action.user }
        case REMOVE_USER:
            return initialState
        default: return state;
    }
}
export default authReducer