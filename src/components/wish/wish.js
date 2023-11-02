import RecipeCard from '../Recipe/Recipe/RecipeCard'
import styled from 'styled-components';
import useStore from '../custom-hooks/useStore'
import { removeFromWish,clearWish } from '../../redux/actions/wishActions'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart,addQuantity} from '../../redux/actions/cartActions'

/**
 * @description Displaying WishList
 * @author Dhivya.C
 * @param {*} props 
 * @returns 
 */
const Wish = (props) => {
    const { state, dispatch } = useStore()     
    const { cartList } = useSelector(state => state.cart);     
    console.log(state)
    const dispatcher=useDispatch()
    const addItemToCart = (meal) => {
        let CartItem = cartList.filter((item) => item.id === meal.id);
        if (CartItem.length > 0) {
            dispatcher(addQuantity(meal.id))
            dispatch(removeFromWish(meal.id))
        }
        else {
            dispatcher(addToCart(meal))
           dispatch(removeFromWish(meal.id))
        }
    }    
    return (
        (state?.wishList?.length > 0) ? 
        <>
            <Btn onClick={()=>dispatch(clearWish())}>Clear Wish List</Btn>
            <hr />
            <AppContainer>
                {
                    state.wishList.map((meal) => {
                        return <RecipeCard key={meal.id} meals={meal}>
                            <hr />
                            <Btn onClick={() => addItemToCart(meal)}>Move To Cart</Btn>
                            <Btn onClick={() => dispatch(removeFromWish(meal.id))}>Remove from Wish List</Btn>
                        </RecipeCard>
                    })
                }
            </AppContainer>
            
        </> :
            <h1>No items in the Wishlist</h1>
    )
}
export default Wish;
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
export const Btn = styled.button`
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