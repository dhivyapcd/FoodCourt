import styled from 'styled-components';
import Title from '../common/Title';
import Image from '../common/Image';
import { Btn } from '../Recipe/Recipe/RecipeCard';
import AjaxHOC from '../hoc/AjaxHoc';
import { useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

/**
 * @description:Display Order Details
 * @author:Dhivya.C
 */

const Order = (props) => {
    const history = useNavigate ()
    const { user } = useSelector(state => state.auth);
    const users = user
    useEffect(() => {
        props.makeApi({url:`/orders`})
    }, [])
    /**
* Object Destructing
* Optional chaining 
*  Nullish coalescing */
    const redirectToDetails = (id) => {
        console.log(id)
        history(`/status/${id}`)
    }
    
    return (

        (props?.orderDetails.length > 0) ?
            props.orderDetails.map((item) => {
                let orderDisplay = [];
                let { orderId, orderDate, user, totalAmount, cartList } = item;

                cartList.map((orderItem) => {
                    let { mealId, mealDescription, mealName, mealImage, category, quantity, price } = orderItem;
                    if (users === user) {
                        let displayList =
                            <AppContainer>
                                <b><div>{`OrderId: #${orderId}`}</div>
                                    <div>{`OrderDate:  ${orderDate}`}</div>
                                    <div>{`SubTotal:  ₹ ${totalAmount}`}</div></b>
                                <Card>
                                    <Image source={mealImage} text={mealName} />
                                    <Title title={mealDescription} />
                                    <b><div>Category:{category}</div>
                                        <div>{`Qty:  ${quantity}`}</div>
                                        <div><p>Price:₹{price}/-</p></div></b>
                                </Card>
                                <Btn onClick={() => redirectToDetails(mealId)}>Track Status</Btn>
                            </AppContainer>
                        orderDisplay.push(displayList)
                    }
                });

                return orderDisplay

            }) : <>No Orders Placed Not Yet</>
    )
}
export default AjaxHOC(Order, { url: `/orders`, isOrderPage: true })
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
const Card = styled.a`
	max-width: 500px;
	width: 100%;
	display: inline-block;
	border-radius: 3px;
	text-decoration: none;
	color: #000;
	margin: 0 10px 15px;
    box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
`;