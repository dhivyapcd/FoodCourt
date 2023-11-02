import {combineReducers} from "redux"
import cartReducer from "./cartReducer"
import wishReducer from "./wishReducer"
import mealReducer from "./mealReducer"
import userReducer from "./userReducer"
import authReducer from "./authReducer"


const rootReducer=combineReducers(  {
        cart:cartReducer,
        wish:wishReducer,
        meals:mealReducer,
        users:userReducer,
        auth:authReducer
    })
export default rootReducer;