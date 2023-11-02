import { GET_USERS_SUCCESS, GET_USERS_ERROR } from "./actionTypes"


const fetchUserSuccess = (data) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: data
    }
}
const fetchUserError = (error) => {
    return {
        type: GET_USERS_ERROR,
        payload: error.message

    }
}

export { fetchUserSuccess, fetchUserError }