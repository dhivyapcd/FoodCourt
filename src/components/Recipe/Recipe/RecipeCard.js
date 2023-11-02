import React from 'react';

import styled from 'styled-components';
import { useNavigate  } from 'react-router-dom';

import Title from '../../common/Title';
import Image from '../../common/Image';

/**
 * @description:Displaying Recipie Items
 * @author:Dhivya.C
 */
const RecipeCard = (props) => {

	const history = useNavigate ()
	let item = props.meals;
	//console.log("PROPS=>", this.props);
	return (
		<Card>
			<Image source={item.mealImage} text={item.mealName} />
			<Title title={item.mealDescription} />
			<div><p>Category:{item.category}</p></div>
			<div><p>Price:Rs:{item.price}/-</p></div>
			<div className="actions">
			<button onClick={()=>history(`/recipe-details/${item.id}`)}>See More</button>
			{props.removeItemFromCart?
			<button onClick={()=>props.removeItemFromCart(item.id)}>Delete from Cart</button>:null}
			 {props.children} 
			 </div>
		</Card>

	)

}

export default RecipeCard;

const Card = styled.div`
	max-width: 400px;
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