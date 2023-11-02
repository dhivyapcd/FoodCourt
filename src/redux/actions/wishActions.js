import { ADD_TO_WISH, CLEAR_WISH, REMOVE_FROM_WISH } from "./actionTypes";
export const addToWish = (item) => {
    return {
        type: ADD_TO_WISH,
        payload: item
    }
}
export const removeFromWish = (id) => {
    return {
        type: REMOVE_FROM_WISH,
        id
    }
}
export const clearWish = () => {
    return {
        type: CLEAR_WISH
    }
}
