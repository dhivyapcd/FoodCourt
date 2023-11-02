import React, { useContext } from 'react';
import {Outlet } from 'react-router-dom';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Auth from '../../Auth';
import { useDispatch, useSelector } from 'react-redux';
import useStore from '../custom-hooks/useStore'
import {removeUser} from '../../redux/actions/authActions'

/**
 * @Description:Displaying Navigation Elements
 * @author:Dhivya.C
 * 
 * @returns 
 */
const Navbar = () => {	
	const {cartList}=useSelector(state=>state.cart)
	const {user}=useSelector(state=>state.auth)
	const dispatcher=useDispatch()
	const {state}=useStore()
	//console.log(auth)
	const logout=()=>{ 
		dispatcher(removeUser())
		Auth.signout()}		
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
			<h3>Food Court</h3>
		{/* <NavLink to='/about'>
			About
		</NavLink> */}
		{/* { Auth.getAuth() ?  */}
		<>
		<NavLink to='/home'>
			Menu
		</NavLink>
		<NavLink to='/add-recipe'>
			Add Recipe
		</NavLink>	
		<NavLink to='/wish'>
			Wishlist({state?.wishList?.length??0})
		</NavLink>
		<NavLink to='/cart'>
			Cart({cartList?.length??0})
		</NavLink>	
		<NavLink to='/order'>
			My Orders
		</NavLink>	
		
		{/* <NavLink to='/status'>
			Track Status
		</NavLink>	 */}
			<Nav>
		<NavLink to='/sign-in'>Sign In as ({user??''})</NavLink>
		<NavBtn>
		<NavBtnLink to='/sign-in' onClick={()=>logout()}> Sign Out</NavBtnLink>
		</NavBtn>
		</Nav>
		</>
		{/* : */}
		 <>
		 <Nav>
		 <NavBtn>
		<NavBtnLink to='/sign-up'> Sign Up</NavBtnLink>
		</NavBtn>
		</Nav>
		
		
		</>
		<Outlet/>
{/* } */}
</NavMenu>
	</Nav>
	</>
);
};
export default Navbar;

