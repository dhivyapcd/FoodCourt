import styled from 'styled-components';
import { useEffect } from 'react';
import StepProgressBar from '../common/progreesbar';
import Title from '../common/Title';
import Image from '../common/Image';
import AjaxHoc from '../hoc/AjaxHoc';
import { useParams } from 'react-router';


/**
 * @description:Displaying Order Track Status
 * @author:Dhivya.C
 */
const OrderCard =(props)=>{
	const params=useParams()

	useEffect(() => {
        props.makeApi({url:`/orders`})
		console.log(props.mealId)
    }, []);
	return (
		(props?.orderDetails.length > 0) ?
			props.orderDetails.map((item) => {
				let orderDisplay = [];
				let { orderId, orderDate, user, status, totalAmount, cartList } = item;
				cartList.map((orderItem) => {
					let { mealDescription,mealId, mealName, mealImage, category, quantity, price } = orderItem;
					if(params.id==mealId)
					{
						console.log(props.mealId,mealId)
						let displayList =
						<>
							<AppContainer>
							<b><div>{`OrderId:# ${orderId}`}</div>
                                <div>{`OrderDate: ${orderDate}`}</div>                                                   
                                <div>{`SubTotal:  ₹ ${totalAmount}`}</div></b>
								<Image source={mealImage} text={mealName} />
								<Title title={mealDescription} />
								<b><div>Category:{category}</div>
								<div>{`Qty:  ${quantity}`}</div>
								<div><p>Price:₹{price}/-</p></div></b>
								</AppContainer>
								<Card>
								<b><StepProgressBar status={status} />
								<div>{`Status:  ${status}`}</div></b>
							</Card>
							</>
						orderDisplay.push(displayList)
					}
				});

				return orderDisplay

			}) : <>No Orders Placed Not Yet</>
		
	
	)
}

export default AjaxHoc(OrderCard,{url:`/orders`,isOrderPage: true,status:"Order Placed"});

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
const AppContainer = styled.div`
	max-width:500px;
	width:100%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;