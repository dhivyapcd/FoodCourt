import { FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS,SET_LOADER} from "./actionTypes"
import { getData } from '../../apis'

const fetchProducts = () => {
    return (async (dispatch ) => {
        try {
            dispatch(setLoader(true))
            let response = await getData('/meals')
            console.log(response)
            dispatch(fetchProductSuccess(response.data))
        }
        catch (error) {
            dispatch(fetchProductError(error))            
        }
        finally{
            dispatch(setLoader(false))
        }
    })
}
const fetchProductSuccess = (data) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: data
    }
}
const fetchProductError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        payload: error.message

    }
}
export const setLoader=(isLoading)=>{
    return{
        type:SET_LOADER,
        payload:isLoading
    }

}

export { fetchProducts, fetchProductSuccess, fetchProductError }