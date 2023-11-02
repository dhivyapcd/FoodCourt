import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY} from "../actions/actionTypes"

const initialState = {
    cartList: [],
    isLoading: false      
}
const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_TO_CART:
            let newState = { ...state, cartList: [...state.cartList, action.payload] };
            return {
                ...newState,
                cartList: newState.cartList.map(meal =>
                    meal.id !== action.id
                        ? { ...meal, quantity: 1 }
                        : meal,
                )
            };

        case REMOVE_FROM_CART:

            return { ...state, cartList: state.cartList.filter((item) => item.id !== action.id) };

        case ADD_QUANTITY:

            return {
                ...state,
                cartList: state.cartList.map(meal =>
                    meal.id === action.id
                        ? { ...meal, quantity: meal.quantity + 1 }
                        : meal,
                )
            };

        case SUB_QUANTITY:

            return {
                ...state,
                cartList: state.cartList.map(meal =>
                    meal.id === action.id
                        ? {
                            ...meal,
                            quantity: meal.quantity !== 1 ? meal.quantity - 1 : 1,
                        }
                        : meal,
                )
            };

        case CLEAR_CART:
            let clearState = {
                ...state,
                cartList: []
            }
            return clearState;       
        default: return state;
    }
}
export default cartReducer;