import {ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART,ADD_QUANTITY,SUB_QUANTITY} from "./actionTypes";
export const addToCart = (item) => {
    return {
       type: ADD_TO_CART ,
       payload:item  
    }
}
export const removeFromCart = (id) => {
    return {
        type:REMOVE_FROM_CART ,
        id
    }
}
export const clearCart = () => {
    return    {
        type:CLEAR_CART
    }
}
export const subtractQuantity = id => {
    return {
      type: SUB_QUANTITY,
      id,
    };
  };
  export const addQuantity = id => {
    return {
      type: ADD_QUANTITY,
      id,
    };
  }; 
 