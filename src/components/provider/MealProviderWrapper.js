import React, { useReducer } from 'react'
import wishReducer,{ initialState } from '../../redux/reducers/wishReducer'
export const MealContext = React.createContext();
const MealProviderWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(wishReducer, initialState)
    return <MealContext.Provider value={{state, dispatch}}>
        {children}
    </MealContext.Provider>
}
export default MealProviderWrapper;