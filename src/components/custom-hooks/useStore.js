import { MealContext } from '../provider/MealProviderWrapper'
import { useContext } from 'react'
const useStore = () => {
    const { state, dispatch } = useContext(MealContext)
    return {
        state, dispatch
    }
}
export default useStore