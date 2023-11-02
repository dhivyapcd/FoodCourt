import React, { useCallback, useMemo, useState, useEffect } from 'react'
import RecipeCard from '../Recipe/Recipe/RecipeCard'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, addToCart, removeFromCart, subtractQuantity, clearCart } from '../../redux/actions/cartActions';
import AjaxHOC from '../hoc/AjaxHoc'
/**
 * @author:Dhivya
 * @description:Displaying Cart Details
 * @param {*} props 
 * @returns 
 * 
 */
const Cart = (props) => {
    const [isProceed, setIsProceed] = useState(false)
    const { cartList } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.auth);
    
    const dispatcher = useDispatch()
    const removeItemFromCart = (id) => {
        let cartItem = cartList.filter((item) => item.id === id && item.quantity !== 1);
        //let cartLastItem = cartList.filter((item) => item.id === id && item.quantity == 1);
        if (cartItem.length > 0)
            dispatcher(subtractQuantity(id))
        // else if (cartLastItem.length > 0)
        //     alert("If you wish to remove from cart please click remove from cart...")        
    }
    const removeFromCarts = useCallback((id) => {
        dispatcher(removeFromCart(id));
    }, [])
    const confirm = () => { setIsProceed(!isProceed) }

    const addItemToCart = (meal) => {
        let cartItem = cartList.filter((item) => item.id === meal.id);
        if (cartItem.length > 0)
            dispatcher(addQuantity(meal.id))       
    }
    const getTotalPrice = () => {
        let sum = 0;
        cartList.map((item) => {
            sum = sum + item.price;
        })
        return sum;
    }
    const useMemoTotal = useMemo(getTotalPrice, [cartList.length])

    const placeOrder = () => {
        let orderId = Math.floor((Math.random() * 5000) + 1);
        let tempDate = new Date();
        let orderDate = tempDate.getFullYear() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getDate();
        cartList.map((item) => {
            let mealId = Math.floor((Math.random() * 8000) + 1)
            item.mealId = mealId
        })
        let status = 'Order Placed'
        let totalAmount = useMemoTotal
        let obj1 = { orderId, orderDate, user, cartList, status, totalAmount }
        props.postApi({ url: `/orders` }, obj1)
        dispatcher(clearCart())
        alert(`Your Order # ${orderId} Placed Successfully`)
    }


    return (

        (cartList?.length > 0) ? <>
            <h2>Total:₹{useMemoTotal}</h2>
            <button onClick={confirm}>Place Order</button>
            {
                isProceed ? <button onClick={() => placeOrder()}>Proceed to buy</button> : null
            }
            <hr />
            <button onClick={() => dispatcher(clearCart())}>Clear Cart</button>
            <hr />
            <AppContainer>
                {
                    cartList.map((meal) => {
                        return <RecipeCard key={meal.id} meals={meal} removeItemFromCart={removeFromCarts}>
                            <hr />
                            <p>Quantity:{meal.quantity}</p>
                            <div className="product">
                            <button onClick={() => addItemToCart(meal)}>+</button>                            
                            <button onClick={() => removeItemFromCart(meal.id)}>-</button>
                            </div>
                        </RecipeCard>
                    })
                }
            </AppContainer>
        </> :
            <h1>No items in the cart</h1>
    )
}
export default AjaxHOC(React.memo(Cart), { url: `/orders` })
const AppContainer = styled.div`
	max-width:1500px;
	width:100%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;
export const button = styled.button`
border-radius: 4px;
background: #4aa34f;
padding: 10px 22px;
color:#d6d7da;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;