import { GET_USERS_SUCCESS, GET_USERS_ERROR, SET_LOADER } from "../actions/actionTypes"
const initialState = {
    userList: [],
    error: '',
    isLoading: false    
}

const userReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_USERS_SUCCESS:
            return { ...state, userList: action.payload }
        case GET_USERS_ERROR:
            return { ...state, error: action.payload }       
        default:
            return state;
    }

}

export default userReducer
