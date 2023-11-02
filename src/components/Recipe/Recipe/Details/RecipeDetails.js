import styled from 'styled-components';
import Title from '../../../common/Title';
import Image from '../../../common/Image';
import { Btn } from '../RecipeCard';
import Rating from '../../../common/rating';
import {addToCart,addQuantity} from '../../../../redux/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux';
import AjaxHOC from '../../../hoc/AjaxHoc'
import { useParams } from 'react-router';
import { useEffect } from 'react';


/**
 * @description:Display Recipe Details
 * @author:Dhivya.C
 */

const RecipeDetails = (props) => {
	const {cartList}=useSelector(state=>state.cart)
	const dispatch=useDispatch();
	const params=useParams()
	
	const addItemToCart = (meal) => {
		console.log(props);
		let cartItem = cartList.filter((item) => item.id === meal.id);
		if (cartItem.length > 0)
			dispatch(addQuantity(meal.id))
		else {		
			dispatch(addToCart(meal));
		}
	}
	useEffect(()=>{
		props.makeApi({url:`/meals/${params.id}`})
	},[])
	
	/**
	 * Object Destructing
	 * Optional chaining 
	 *  Nullish coalescing */
	
	const { id, mealName, category, mealDescription, mealImage, price, details } = props.mealDetails;
	return (
		<Card
			key={id}>
			<Image source={mealImage} text={mealName} />
			<Title title={mealDescription} />
			<div><p>Category:{category}</p></div>			
			<div><p>Price:Rs:{price}/-</p></div>
			 <div><p>Ratings:{details[0]?.ratings ?? "No Review"}<Rating id="rating" rating={details[0]?.ratings}/></p></div> 			
			<div><p>MealType:{details[0]?.picked ?? "Standard"}</p></div>
			<Btn onClick={() => addItemToCart(props.mealDetails)}>Add To Cart</Btn>
		</Card>
	)

}
export default AjaxHOC(RecipeDetails,{isDetailPage:true})
const Card = styled.a`
	max-width: 350px;
	width: 100%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;