import styled from 'styled-components';
import Search from '../../common/Search';
import RecipeCard from '../Recipe/RecipeCard';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../apis';
import { fetchProducts } from '../../../redux/actions/mealActions'
import { addToWish } from '../../../redux/actions/wishActions'
import { addToCart, addQuantity } from '../../../redux/actions/cartActions'
import useStore from '../../custom-hooks/useStore';
import Spinner from '../../../Spinner'
//
/**
 * @description:Display Menu
 * @author:Dhivya.C
 */
const Menu = (props) => {
	const [meals, setMeals] = useState([])
	const { mealsList, isLoading } = useSelector(state => state?.meals)
	const { userList } = useSelector(state => state.users)
	const { cartList } = useSelector(state => state.cart);
	const dispatcher = useDispatch();
	const { dispatch } = useStore();
	/**
	 * Description:Search Recipe
	 * @param {} searchInput 
	 */
	console.log(isLoading)
	useEffect(() => {
		//getMeals('/meals')
		dispatcher(fetchProducts())
		console.log(meals, mealsList)
	}, [])
	useEffect(() => {
		return (() => {
			dispatcher({ type: 'PAGE_LEAVE_ACTION' })
			console.log("REMOVE aLL SUB")
		})
	}, [])
	const OnSearch = (searchInput) => {
		getMeals(`/meals?q=${searchInput}`)
	}
	const getMeals = (url) => {
		getData(url)
			.then(res => {
				setMeals(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}

	const addItemToCart = (meal) => {
		let cartItem = cartList.filter((item) => item.id === meal.id);
		if (cartItem.length > 0)
			dispatcher(addQuantity(meal.id))
		else {
			dispatcher(addToCart(meal));
		}
	}
	const fetchMeals = () => {
		dispatcher({ type: 'FETCH_PRODUCTS' })
	}
	const fetchUsers = () => {
		dispatcher({ type: 'GET_USERS' })
	}
	const fetchBoth = () => {
		dispatcher({ type: 'FETCH_MEALS_USERS' })
	}
	return (
		<AppContainer className="App">
			<span>Users:{userList.length}</span>
			<Btn onClick={fetchMeals}>Fetch Meals</Btn>
			<Btn onClick={fetchUsers}>Fetch users</Btn>
			<Btn onClick={fetchBoth}>Fetch Both</Btn>
			<Search OnSearch={OnSearch} />
			{
				isLoading ? <Spinner /> :
					(mealsList.length > 0) ?

						(meals.length > 0) ?
							meals.map((item) => {
								return <RecipeCard meals={item} key={item.id}><hr />
									<Btn onClick={() => dispatch(addToWish(item))}>Add To WishList</Btn>
									<Btn onClick={() => addItemToCart(item)}>Add To Cart</Btn>
								</RecipeCard>
							})
							:
							mealsList.map((item) => {
								return <RecipeCard meals={item} key={item.id}><hr />
									<Btn onClick={() => dispatch(addToWish(item))}>Add To WishList</Btn>
									<Btn onClick={() => addItemToCart(item)}>Add To Cart</Btn>
								</RecipeCard>
							})


						: <></>
			}

		</AppContainer>


	);
}

export default Menu;
const AppContainer = styled.div`
	max-width:1400px;
	width:150%;
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
