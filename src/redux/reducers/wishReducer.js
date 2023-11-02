import { ADD_TO_WISH, CLEAR_WISH, REMOVE_FROM_WISH} from "../actions/actionTypes"

export const initialState = {
    wishList: [],
    isLoading: false
}
const wishReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TO_WISH:
            let newState = { ...state, wishList: [...state.wishList, action.payload] };                      
            return newState;
        case REMOVE_FROM_WISH:          
            return { ...state, wishList: state.wishList.filter((item) => item.id !== action.id) };
        case CLEAR_WISH:
            return initialState;
        default: return state;
    }
}
export default wishReducer

