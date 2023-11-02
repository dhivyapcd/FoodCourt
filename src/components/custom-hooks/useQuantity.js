import {useState} from "react"
const useQuantity=(props)=>{
    const [quantity,setQuantity]=useState(props.intialValue)
    const increment=()=>setQuantity(quantity+1)
    const decrement=()=>setQuantity(quantity-1)
    return{
        increment,
        decrement,
        quantity
    }
}
export default useQuantity