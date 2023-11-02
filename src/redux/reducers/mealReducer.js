import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ERROR, SET_LOADER } from "../actions/actionTypes"
const initialState = {
    mealsList: [],
    error: '',
    isLoading: false    
}

const mealReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return { ...state, mealsList: action.payload }
        case FETCH_PRODUCTS_ERROR:
            return { ...state, error: action.payload }
        case SET_LOADER:
            return { ...state, isLoading: action.payload }
        default:
            return state;
    }

}

export default mealReducer
